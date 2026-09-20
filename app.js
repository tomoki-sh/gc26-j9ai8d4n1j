/* Gift Catalog 2026 — 表示・操作・同期。
   データの正本は catalog-data.js（docx から生成）と tryon-data.js（採用画像から生成）。ここに事実を書き写さない。
   共有データ（★・メモ）は Firebase の DB_PATH 以下に、1項目・1人ずつの細かい単位で書く。
   ノード全体を set しないので、片方の編集がもう片方の★やメモを巻き戻すことはない。 */
"use strict";

const DB_PATH = "gift-catalog-2026";
const LS_PREFIX = "gift-catalog-2026-";
const CACHE_KEY = LS_PREFIX + "cache";   // 共有データの表示用控え（オフラインでも★とメモを見られるように）
const UI_KEY = LS_PREFIX + "ui";         // タブ・絞り込み・表示切替など、この端末だけの設定
const WANT_MAX = 5;
/* ローカル確認用：この端末（localhost）で ?preview を付けたときだけ、ログインなしで閲覧できる。公開URLでは効かない。 */
const PREVIEW = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && new URLSearchParams(location.search).has("preview");
const NOTE_MAX = 1000;

const TABS = [
  { key: "guide", label: "はじめに", panel: "guide" },
  { key: "hair", label: "ヘア", panel: "items" },
  { key: "accent", label: "脇役アクセ", panel: "items" },
  { key: "jewelry", label: "ネックレス・ピアス", panel: "items" },
  { key: "binocular", label: "双眼鏡", panel: "items" },
  { key: "live", label: "ライブ小物", panel: "items" },
  { key: "official", label: "HANA関連", panel: "items" },
  { key: "daily", label: "生活用品", panel: "items" },
  { key: "experience", label: "体験", panel: "items" },
  { key: "fav", label: "★まとめ", panel: "fav" },
  { key: "appendix", label: "付録", panel: "appendix" }
];
/* 古い評価ラベルは公開しない。各カードには「確認」（買う前に確かめたいこと）を出す */
const PRICE_BANDS = [
  { key: "lt15", label: "〜1.5万円", test: p => p !== null && p < 15000 },
  { key: "15to30", label: "1.5〜3万円", test: p => p !== null && p >= 15000 && p < 30000 },
  { key: "30to40", label: "3〜4万円", test: p => p !== null && p >= 30000 && p < 40000 },
  { key: "ge40", label: "4万円〜", test: p => p !== null && p >= 40000 },
  { key: "none", label: "金額なし", test: p => p === null }
];
const SORTS = [
  { key: "rec", label: "おすすめ順" },   // rank のある商品（ヘア）を順位で。無い商品は掲載順
  { key: "id", label: "掲載順" },
  { key: "priceAsc", label: "価格が安い順" },
  { key: "priceDesc", label: "価格が高い順" },
  { key: "want", label: "★が多い順" }
];
const TRYON_VARIANTS = [{ key: "red", label: "赤い毛先" }, { key: "plain", label: "通常の髪" }];

const ITEMS = DATA.items;
const BY_ID = Object.fromEntries(ITEMS.map(it => [it.id, it]));
const TRYON_MAP = (typeof TRYON === "object" && TRYON) || {};

/* ---------- 小道具 ---------- */
const $ = sel => document.querySelector(sel);
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function readLS(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v && typeof v === "object" ? v : fallback; }
  catch (e) { return fallback; }
}
function writeLS(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* 保存できない環境でも表示は続ける */ } }

/* 表示用の価格（例「33,000円（公式取得）／38,500円」）から、比較用の最初の金額を取り出す。
   「2人1万〜2万円」のような人数表記は金額ではないので除く。金額が無ければ null。 */
function parsePrice(text) {
  const s = String(text || "").replace(/\d+人/g, "");
  const m = s.match(/(\d[\d,]*(?:\.\d+)?)\s*(万)?(?=\s*(?:円|万|〜|～))/);
  if (!m) return null;
  const n = parseFloat(m[1].replace(/,/g, ""));
  // 「6.5〜7万円」のように単位が範囲の後ろにだけ付く書き方も万として読む
  const rangeMan = !m[2] && /^\s*[〜～]\s*\d[\d,.]*\s*万/.test(s.slice(m.index + m[0].length));
  return Math.round(m[2] || rangeMan ? n * 10000 : n);
}
const PRICE = Object.fromEntries(ITEMS.map(it => [it.id, parsePrice(it.price)]));

/* ---------- 状態 ---------- */
const ui = Object.assign({ tab: "guide", check: [], band: [], use: [], starred: false, sort: "rec", view: "cards", tryon: "red", v: 3 }, readLS(UI_KEY, {}));
if (!(ui.v >= 3)) { ui.sort = "rec"; ui.check = []; delete ui.status; ui.v = 3; }   // 以前の端末に残った並び替え・評価の絞り込みを一度だけ揃える
let shared = Object.assign({ want: {}, note: {}, members: {} }, readLS(CACHE_KEY, {}));
let myUid = "";
let myEmail = "";   // ログイン中のアカウントのメールアドレス（Firebase から受け取るだけで、ファイルには書かない）
let syncState = "offline";   // offline | connecting | live | denied
let unsubs = [];

function saveUI() { writeLS(UI_KEY, ui); }
function saveCache() { writeLS(CACHE_KEY, shared); }

/* 表示名：公開ファイルにメールアドレスを書かないよう、"gc26:"+メールアドレス の SHA-256 で照合する */
const NAME_BY_HASH = {
  "6b295f59d5e5a4c7a09ff1d728e7c702c5c958317b9e940f0eac9d366b022e6b": "Tomoki",
  "c8debb15d6c27538e235117a7794e7c687e5ba25579d7416d09e332cab04c363": "Yuka"
};
let myName = "";
async function resolveMyName(email) {
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("gc26:" + email.toLowerCase()));
    return NAME_BY_HASH[[...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("")] || "";
  } catch (e) { return ""; }
}
/* 自分の表示名を members/{uid} に書いておき、相手の画面でも名前で出るようにする */
function syncMyName() {
  if (!myName || syncState !== "live" || (shared.members || {})[myUid] === myName) return;
  shared.members = Object.assign({}, shared.members, { [myUid]: myName });
  writeShared(`members/${myUid}`, myName);
}
function memberName(uid) {
  if (uid === myUid && myName) return myName;
  const n = shared.members && shared.members[uid];
  if (n) return String(n);
  return uid === myUid ? "自分" : "相手";
}
/* ★をつけた人の一覧。自分を先頭にする */
function raters() {
  const ids = new Set(Object.keys(shared.want || {}));
  Object.keys(shared.members || {}).forEach(u => ids.add(u));
  if (myUid) ids.add(myUid);
  return [...ids].sort((a, b) => (a === myUid ? -1 : b === myUid ? 1 : a.localeCompare(b)));
}
function getWant(uid, id) {
  const v = parseInt(((shared.want || {})[uid] || {})[id], 10);
  return v >= 1 && v <= WANT_MAX ? v : 0;
}
function wantTotal(id) { return raters().reduce((s, u) => s + getWant(u, id), 0); }
function getNote(id) {
  const n = (shared.note || {})[id];
  return n && typeof n.text === "string" ? n : null;
}
function canEdit() { return !!myUid && syncState === "live"; }

/* ---------- 同期 ---------- */
function setStatus(text, kind) {
  ["#sync-status", "#gate-status"].forEach(sel => {
    const el = $(sel);
    if (!el) return;
    el.textContent = text;
    el.dataset.kind = kind || "";
  });
}
/* 最初はログイン画面だけを見せ、許可されたアカウントで共有データを読めたらカタログを開く */
let unlocked = false;
let authKnown = false;   // Firebase がログイン状態を返すまでは、ログインボタンを出さずに「確認しています…」にする
function setLocked(locked) {
  const wasUnlocked = unlocked;
  unlocked = !locked;
  document.body.classList.toggle("locked", locked);
  $("#gate").hidden = !locked;
  $("#app").hidden = locked;
  if (unlocked && !wasUnlocked) { if (location.hash) routeFromHash(); else renderAll(); }
}
function refreshStatus() {
  if (!authKnown && !PREVIEW) setStatus("確認しています…", "");
  else if (PREVIEW && !myUid) setStatus("プレビュー（この端末だけ・閲覧のみ）", "");
  else if (!myUid) setStatus("招待されたGoogleアカウントでログインすると開きます", "");
  else if (syncState === "denied") setStatus("このアカウントでは開けません。招待されたGoogleアカウントでログインし直してください。", "error");
  else if (syncState === "live") setStatus(myEmail ? `${memberName(myUid)} (${myEmail})` : memberName(myUid), "ok");
  else setStatus("確認しています…", "");
  setLocked(!(PREVIEW || (myUid && syncState === "live")));
}
function stopSync() { unsubs.forEach(f => { try { f(); } catch (e) { /* 既に解除済み */ } }); unsubs = []; }
function onAuth(uid, email) {
  authKnown = true;
  myEmail = uid ? String(email || "") : "";
  myName = "";
  if (myEmail) resolveMyName(myEmail).then(n => {
    if (!n || uid !== myUid) return;
    myName = n;
    syncMyName();
    refreshStatus();
    refreshSocialAll();
  });
  document.body.classList.remove("auth-pending");
  stopSync();
  myUid = uid;
  syncState = uid ? "connecting" : "offline";
  refreshStatus();
  renderAll();
  if (!uid || !window.FB) return;
  const { db, ref, onValue } = window.FB;
  const pending = new Set(["want", "note", "members"]);
  ["want", "note", "members"].forEach(key => {
    unsubs.push(onValue(ref(db, `${DB_PATH}/${key}`), snap => {
      shared[key] = snap.val() || {};
      pending.delete(key);
      if (!pending.size) syncState = "live";
      saveCache();
      syncMyName();
      refreshStatus();
      refreshSocialAll();
    }, err => {
      syncState = "denied";
      refreshStatus();
      console.warn("Firebase 読み取り失敗", key, err && err.code);
    }));
  });
}
function writeShared(path, value) {
  if (!canEdit()) { setStatus("編集するにはGoogleでログインしてください", "error"); return Promise.resolve(false); }
  const { db, ref, set } = window.FB;
  return set(ref(db, `${DB_PATH}/${path}`), value).then(() => true, err => {
    setStatus("保存できませんでした。通信状態を確認して、もう一度お試しください。", "error");
    console.warn("Firebase 書き込み失敗", path, err && err.code);
    return false;
  });
}
function setWant(id, n) {
  if (!canEdit() || !BY_ID[id]) return;
  const v = getWant(myUid, id) === n ? 0 : n;   // 同じ★をもう一度押すと取り消し
  shared.want[myUid] = Object.assign({}, shared.want[myUid], { [id]: v || null });
  refreshSocial(id);
  writeShared(`want/${myUid}/${id}`, v || null);
}
/* 自分の★を消す（相手の★には触れない）。書き込みは1項目ずつ */
function clearWant(id) {
  if (!canEdit() || !getWant(myUid, id)) return;
  shared.want[myUid] = Object.assign({}, shared.want[myUid], { [id]: null });
  refreshSocial(id);
  writeShared(`want/${myUid}/${id}`, null);
}
function clearAllMyWants() {
  if (!canEdit()) return;
  // カタログから外した商品に残っている★も含めて消す
  const ids = Object.keys((shared.want || {})[myUid] || {}).filter(id => shared.want[myUid][id]);
  if (!ids.length || !confirm(`自分がつけた★（${ids.length}件）をすべて消しますか？相手の★は消えません。`)) return;
  shared.want[myUid] = {};
  saveCache();
  refreshSocialAll();
  ids.forEach(id => writeShared(`want/${myUid}/${id}`, null));
}
/* メモを書いている間の取り違えを防ぐ：書き始めた時点の内容を覚えておく */
let noteEdit = null;
function noteSnapshot(id) { const n = getNote(id); return { id, text: n ? n.text : "", at: n ? n.at : 0, uid: n ? n.uid : "" }; }
function beginNote(id, el) { noteEdit = Object.assign(noteSnapshot(id), { el: el || null }); }
/* 書いている途中に相手が更新したかどうか */
function noteChangedByOther(id) {
  if (!noteEdit || noteEdit.id !== id) return false;
  const n = getNote(id);
  return (n ? n.text : "") !== noteEdit.text && (!n || n.uid !== myUid);
}
function endNote(id, text, el) {
  const t = String(text || "").slice(0, NOTE_MAX);
  const started = noteEdit && noteEdit.id === id && (!el || !noteEdit.el || noteEdit.el === el) ? noteEdit : null;
  noteEdit = null;
  // 書き始めの記録が無いときは保存しない（古い内容で相手の更新を上書きしないため）
  if (!started) { refreshSocial(id); return; }
  // 自分が書き換えていないなら、何も保存しない
  if (t === started.text) { refreshSocial(id); return; }
  if (noteChangedByOtherSnapshot(started, id)) {
    if (!confirm("このメモは、書いている間に相手が更新しました。自分の内容で上書きしますか？\n（キャンセルすると相手の内容に戻します）")) { refreshSocial(id); return; }
  }
  setNote(id, t);
}
function noteChangedByOtherSnapshot(started, id) {
  if (!started) return false;
  const n = getNote(id);
  return (n ? n.text : "") !== started.text && (!n || n.uid !== myUid);
}
function setNote(id, text) {
  if (!canEdit() || !BY_ID[id]) return;
  const t = String(text || "").slice(0, NOTE_MAX);
  const cur = getNote(id);
  if ((cur ? cur.text : "") === t) return;
  const value = t ? { text: t, uid: myUid, at: Date.now() } : null;
  shared.note[id] = value;
  writeShared(`note/${id}`, value);
}
function clearCache() { try { localStorage.removeItem(CACHE_KEY); } catch (e) { /* 無視 */ } }

/* ---------- 描画：タブ ---------- */
function tabCount(key) {
  if (key === "fav") return ITEMS.filter(it => wantTotal(it.id) > 0).length;
  const n = ITEMS.filter(it => it.cat === key).length;
  return n || "";
}
function renderTabs() {
  $("#tabs").innerHTML = TABS.map(t => {
    const c = tabCount(t.key);
    return `<button type="button" role="tab" class="tab${ui.tab === t.key ? " active" : ""}" data-tab="${t.key}" aria-selected="${ui.tab === t.key}">${esc(t.label)}${c !== "" && t.key !== "guide" && t.key !== "appendix" ? `<span class="tab-count">${c}</span>` : ""}</button>`;
  }).join("");
}
function clearFilters() { ui.check = []; ui.band = []; ui.use = []; ui.starred = false; }
/* この章に無い絞り込み条件は、画面に出ないまま0件の原因になるので外す */
function pruneFilters() {
  const here = ITEMS.filter(it => it.cat === ui.tab);
  if (!here.length) return;
  ui.check = ui.check.filter(c => here.some(it => it.check === c));
  ui.band = ui.band.filter(k => here.some(it => (PRICE_BANDS.find(b => b.key === k) || { test: () => false }).test(PRICE[it.id])));
  ui.use = ui.use.filter(u => here.some(it => (it.use || []).includes(u)));
}
function showTab(key, scrollId) {
  if (!TABS.some(t => t.key === key)) key = "guide";
  ui.tab = key; pruneFilters(); saveUI();
  renderAll();
  if (scrollId) {
    const el = document.getElementById("item-" + scrollId);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 1600); }
  } else window.scrollTo({ top: 0 });
}

/* ---------- 描画：カード ---------- */
function checkBadge(it) { return it.check ? `<span class="badge check">確認：${esc(it.check)}</span>` : ""; }
function rankBadge(it) { return it.rank ? `<span class="badge rank${it.rank <= 3 ? " top" : ""}">おすすめ ${it.rank}位</span>` : ""; }
function galleryImages(it) {
  const list = [];
  if (it.images.item) list.push({ src: it.images.item, cap: `${it.id} ${it.itemLabel || "商品単体"}`, kind: "item" });
  if (it.images.wear) list.push({ src: it.images.wear, cap: `${it.id} ${it.wearLabel || "人物の着用・使用例"}`, kind: "wear" });
  const t = TRYON_MAP[it.id] || {};
  TRYON_VARIANTS.forEach(v => { if (t[v.key]) list.push({ src: t[v.key], cap: `${it.id} AI装着イメージ（${v.label}）・実物とは異なります`, kind: "tryon-" + v.key }); });
  return list;
}
function tryonFigure(it) {
  if (it.cat !== "hair") return "";
  const t = TRYON_MAP[it.id];
  if (!t || !t[ui.tryon]) {
    const why = it.images.item ? "準備中" : "商品写真が未取得のため未生成（別商品の写真では代用しません）";
    return `<figure class="ph tryon-ph"><div class="ph-box">AI装着イメージ<br><small>${esc(why)}</small></div></figure>`;
  }
  const seg = TRYON_VARIANTS.map(v => `<button type="button" class="seg-btn${ui.tryon === v.key ? " on" : ""}" data-tryon="${v.key}" ${t[v.key] ? "" : "disabled"}>${esc(v.label)}</button>`).join("");
  return `<figure class="tryon">
    <button type="button" class="img-btn" data-lb="${it.id}" data-kind="tryon-${ui.tryon}"><img src="${esc(t[ui.tryon])}" alt="${esc(it.name)} のAI装着イメージ" loading="lazy"></button>
    <div class="seg" role="group" aria-label="髪色">${seg}</div>
    <figcaption><span class="ai-tag">AI</span>生成イメージ・実物とは異なります</figcaption></figure>`;
}
function gallery(it) {
  const figs = [];
  if (it.images.item) figs.push(`<figure><button type="button" class="img-btn" data-lb="${it.id}" data-kind="item"><img data-fit="contain" src="${esc(it.images.item)}" alt="${esc(it.name)}" loading="lazy"></button><figcaption>${esc(it.itemLabel || "商品単体")}</figcaption></figure>`);
  if (it.images.wear) figs.push(`<figure><button type="button" class="img-btn" data-lb="${it.id}" data-kind="wear"><img src="${esc(it.images.wear)}" alt="${esc(it.name)} の着用例" loading="lazy"></button><figcaption>${esc(it.wearLabel || "人物の着用・使用例")}</figcaption></figure>`);
  else if (it.images.item && !it.hasWearPhoto) figs.push(`<figure class="ph"><div class="ph-box">人物の着用写真<br><small>確認・取得できず</small></div></figure>`);
  const tf = tryonFigure(it);
  if (tf) figs.push(tf);
  if (!figs.length) return "";
  return `<div class="gallery g${figs.length}">${figs.join("")}</div>`;
}
function starsHTML(id) {
  const rows = raters();
  if (!rows.length) return `<p class="muted small">ログインすると★をつけられます</p>`;
  return rows.map(u => {
    const mine = u === myUid;
    const n = getWant(u, id);
    const stars = Array.from({ length: WANT_MAX }, (_, i) => {
      const on = i < n;
      return mine
        ? `<button type="button" class="star${on ? " on" : ""}" data-want="${i + 1}" aria-label="★${i + 1}" ${canEdit() ? "" : "disabled"}>★</button>`
        : `<span class="star${on ? " on" : ""}" aria-hidden="true">★</span>`;
    }).join("");
    const clear = mine && n && canEdit() ? `<button type="button" class="want-clear" data-want-clear aria-label="自分の★をクリア">クリア</button>` : "";
    return `<div class="want-row${mine ? " mine" : ""}"><span class="who">${esc(memberName(u))}</span><span class="stars" ${mine ? "" : `aria-label="★${n}"`}>${stars}</span>${clear}</div>`;
  }).join("");
}
function noteMeta(id) {
  const n = getNote(id);
  if (!n) return "";
  const d = new Date(n.at || 0);
  const when = isNaN(d) ? "" : `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  return `最終更新：${esc(memberName(n.uid))} ${when}`;
}
function socialHTML(it) {
  const n = getNote(it.id);
  return `<div class="want">${starsHTML(it.id)}</div>
    <label class="note"><span class="note-label">共有メモ</span>
      <textarea data-note="${it.id}" rows="2" maxlength="${NOTE_MAX}" placeholder="${canEdit() ? "気になる点・相談したいこと" : "ログインするとメモを書けます"}" ${canEdit() ? "" : "readonly"}>${esc(n ? n.text : "")}</textarea>
      <span class="note-meta">${noteMeta(it.id)}</span></label>`;
}
function cardHTML(it) {
  const notes = (it.notes || []).map(t => `<li>${esc(t)}</li>`).join("");
  const rows = [["特徴", it.features], ["おすすめ理由", it.reason], ["注意点", it.caution]]
    .filter(r => r[1]).map(r => `<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join("");
  const links = (it.links || []).map(l => `<a class="pill" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join("");
  return `<article class="card" id="item-${it.id}" data-id="${it.id}">
    <header class="card-head">
      <div class="card-meta"><span class="card-id">${it.id}</span><span class="brand">${esc(it.brand)}</span>${rankBadge(it)}${checkBadge(it)}</div>
      <h3>${esc(it.name)}</h3>
      ${it.model ? `<p class="model">品番・型番：${esc(it.model)}</p>` : ""}
      <p class="price">${esc(it.price)}<small>${esc(it.priceNote)}</small></p>
    </header>
    ${gallery(it)}
    ${notes ? `<ul class="notes">${notes}</ul>` : ""}
    <dl class="desc">${rows}</dl>
    ${(it.use || []).length ? `<p class="uses">${it.use.map(u => `<span class="chip-s">${esc(u)}</span>`).join("")}</p>` : ""}
    ${links ? `<p class="links">${links}</p>` : ""}
    <div class="social" data-social="${it.id}">${socialHTML(it)}</div>
  </article>`;
}

/* ---------- 絞り込み・並び替え ---------- */
function itemsOfTab() { return ITEMS.filter(it => it.cat === ui.tab); }
function applyFilters(list) {
  return list.filter(it =>
    (!ui.check.length || ui.check.includes(it.check)) &&
    (!ui.band.length || PRICE_BANDS.some(b => ui.band.includes(b.key) && b.test(PRICE[it.id]))) &&
    (!ui.use.length || (it.use || []).some(u => ui.use.includes(u))) &&
    (!ui.starred || wantTotal(it.id) > 0));
}
function sortItems(list, key) {
  const idx = id => ITEMS.findIndex(it => it.id === id);
  const price = (id, dir) => PRICE[id] === null ? Infinity : dir * PRICE[id];
  const cmp = {
    id: (a, b) => idx(a.id) - idx(b.id),
    rec: (a, b) => (a.rank || Infinity) - (b.rank || Infinity) || idx(a.id) - idx(b.id),
    priceAsc: (a, b) => price(a.id, 1) - price(b.id, 1) || idx(a.id) - idx(b.id),
    priceDesc: (a, b) => price(a.id, -1) - price(b.id, -1) || idx(a.id) - idx(b.id),
    want: (a, b) => wantTotal(b.id) - wantTotal(a.id) || idx(a.id) - idx(b.id)
  }[key] || (() => 0);
  return [...list].sort(cmp);
}
function chip(group, value, label, on, count) {
  return `<button type="button" class="chip${on ? " on" : ""}" data-filter="${group}" data-value="${esc(value)}">${esc(label)}${count !== undefined ? `<span class="chip-n">${count}</span>` : ""}</button>`;
}
function renderToolbar(all) {
  const checks = [...new Set(all.map(it => it.check).filter(Boolean))].sort((a, b) => a.localeCompare(b, "ja"));
  const bands = PRICE_BANDS.filter(b => all.some(it => b.test(PRICE[it.id])));
  const uses = [...new Set(all.flatMap(it => it.use || []))];
  const group = (title, html) => html ? `<div class="tool-row"><span class="tool-label">${title}</span><div class="chips">${html}</div></div>` : "";
  const tryonSwitch = ui.tab === "hair" ? `<div class="tool-row"><span class="tool-label">装着イメージ</span><div class="seg big">${TRYON_VARIANTS.map(v => `<button type="button" class="seg-btn${ui.tryon === v.key ? " on" : ""}" data-tryon="${v.key}">${esc(v.label)}</button>`).join("")}</div></div>` : "";
  $("#toolbar").innerHTML = `
    ${tryonSwitch}
    ${checks.length > 1 ? group("確認", checks.map(c => chip("check", c, c, ui.check.includes(c), all.filter(it => it.check === c).length)).join("")) : ""}
    ${group("価格", bands.map(b => chip("band", b.key, b.label, ui.band.includes(b.key), all.filter(it => b.test(PRICE[it.id])).length)).join(""))}
    ${uses.length > 1 ? group("用途", uses.map(u => chip("use", u, u, ui.use.includes(u))).join("")) : ""}
    <div class="tool-row tool-end">
      ${chip("starred", "1", "★ありだけ", ui.starred)}
      <label class="sort">並び替え <select id="sort">${SORTS.map(s => `<option value="${s.key}"${ui.sort === s.key ? " selected" : ""}>${s.label}</option>`).join("")}</select></label>
      <div class="seg"><button type="button" class="seg-btn${ui.view === "cards" ? " on" : ""}" data-view="cards">カード</button><button type="button" class="seg-btn${ui.view === "table" ? " on" : ""}" data-view="table">一覧表</button></div>
      ${ui.check.length || ui.band.length || ui.use.length || ui.starred ? `<button type="button" class="pill small" id="clear-filters">絞り込みを解除</button>` : ""}
    </div>`;
}
function tableHTML(list) {
  const rs = raters();
  const ranked = list.some(it => it.rank);
  return `<div class="table-wrap"><table class="cmp"><thead><tr>${ranked ? "<th>おすすめ</th>" : ""}<th>ID</th><th>商品</th><th>価格</th><th>確認</th><th>用途</th>${rs.map(u => `<th>★${esc(memberName(u))}</th>`).join("")}<th>メモ</th></tr></thead><tbody>
    ${list.map(it => `<tr data-goto="${it.id}" tabindex="0">${ranked ? `<td class="nowrap">${it.rank ? it.rank + "位" : "—"}</td>` : ""}<td class="mono">${it.id}</td><td><span class="muted small">${esc(it.brand)}</span><br>${esc(it.name)}</td><td class="nowrap">${esc(it.price)}</td><td class="small">${esc(it.check || "")}</td><td class="small">${esc((it.use || []).join("・"))}</td>${rs.map(u => `<td class="stars-cell">${"★".repeat(getWant(u, it.id)) || "—"}</td>`).join("")}<td class="small">${esc((getNote(it.id) || {}).text || "").slice(0, 40)}</td></tr>`).join("")}
  </tbody></table></div>`;
}
function binocularCompare() {
  const rows = DATA.binocularCompare;
  if (!rows || !rows.length) return "";
  return `<div class="compare-box"><h3>${esc(rows[0][0])}</h3><div class="table-wrap"><table class="cmp"><thead><tr>${rows[0].map((c, i) => `<th>${i ? esc(c) : ""}</th>`).join("")}</tr></thead><tbody>
    ${rows.slice(1).map(r => `<tr>${r.map((c, i) => i ? `<td>${r[0] === "ID" ? `<a href="#${esc(c)}" data-jump="${esc(c)}">${esc(c)}</a>` : esc(c)}</td>` : `<th>${esc(c)}</th>`).join("")}</tr>`).join("")}
  </tbody></table></div></div>`;
}
function renderItems() {
  const sec = DATA.sections[ui.tab] || {};
  $("#section-head").innerHTML = `<p class="kicker">${esc(sec.kicker || "")}</p><h2>${esc(sec.title || "")}</h2>${(sec.lead || []).map(p => `<p class="lead">${esc(p)}</p>`).join("")}`;
  const all = itemsOfTab();
  renderToolbar(all);
  $("#extra").innerHTML = ui.tab === "binocular" ? binocularCompare() : "";
  const list = sortItems(applyFilters(all), ui.sort);
  const empty = `<p class="empty">条件に合う項目がありません。</p>`;
  $("#cards").className = ui.view === "table" ? "" : "cards";
  $("#cards").innerHTML = !list.length ? empty : ui.view === "table" ? tableHTML(list) : list.map(cardHTML).join("");
}
function renderFav() {
  const list = sortItems(ITEMS.filter(it => wantTotal(it.id) > 0), "want");
  const mineCount = Object.values((shared.want || {})[myUid] || {}).filter(Boolean).length;
  const clearAll = canEdit() && mineCount ? `<p class="fav-actions"><button type="button" class="want-clear" id="clear-my-wants">自分の★をすべてクリア（${mineCount}件）</button></p>` : "";
  $("#fav-content").innerHTML = clearAll + (list.length ? tableHTML(list)
    : `<p class="empty">まだ★がありません。各カテゴリのカードで★をつけると、ここに集まります。</p>`);
}
function renderGuide() {
  // おすすめ順のある章は上位5点ずつ。無ければ本命・有力
  const groups = (DATA.rankings || []).map(g => ({ title: (DATA.sections[g.cat] || {}).title || g.cat, list: sortItems(ITEMS.filter(it => it.cat === g.cat && it.rank), "rec").slice(0, 5) })).filter(g => g.list.length);
  const blocks = groups.length ? groups : [{ title: "", list: ITEMS.slice(0, 5) }];
  $("#guide-shortlist").innerHTML = blocks.map(g => `<h3>${g.title ? esc(g.title) + "のおすすめ 上位" + g.list.length : "現在の本命・有力"}</h3><div class="mini-list">${g.list.map(it => {
    const t = TRYON_MAP[it.id] || {};
    const img = t[ui.tryon] || it.images.item || "";
    return `<a class="mini" href="#${it.id}" data-jump="${it.id}">${img ? `<img src="${esc(img)}" alt="" loading="lazy">` : ""}<span>${rankBadge(it)} <b>${it.id}</b> ${esc(it.name)}<br><small>${esc(it.brand)}・${esc(it.price)}</small></span></a>`;
  }).join("")}</div>`).join("");
}
function renderAppendix() {
  const isHeading = t => t.length <= 28 && !/[。．]$/.test(t) && !/^\d/.test(t);
  $("#appendix-content").innerHTML = (DATA.appendix || []).map((a, i) => `
    <section class="appendix"><p class="kicker">${esc(a.label)}</p><h2>${esc(a.title)}</h2>
      ${i === DATA.appendix.length - 1 ? `<p class="notice">※ この資料の作成時点では合成画像を使っていませんでしたが、このサイトではヘアアクセサリーにAI生成の装着イメージを追加しています（各画像に「AI」と表示）。</p>` : ""}
      ${a.paras.map(p => isHeading(p) ? `<h4>${esc(p)}</h4>` : `<p>${esc(p)}</p>`).join("")}
    </section>`).join("");
}
function renderAll() {
  renderTabs();
  const panel = (TABS.find(t => t.key === ui.tab) || TABS[0]).panel;
  document.querySelectorAll(".panel").forEach(p => { p.hidden = p.dataset.panel !== panel; });
  if (panel === "guide") renderGuide();
  else if (panel === "items") renderItems();
  else if (panel === "fav") renderFav();
  else if (panel === "appendix") renderAppendix();
}
/* 共有データが変わったときは、入力中のメモを壊さないよう該当部分だけ差し替える */
function refreshSocial(id) {
  const box = document.querySelector(`[data-social="${id}"]`);
  if (!box) return;
  const ta = box.querySelector("textarea");
  if (ta && document.activeElement === ta) {
    // 入力中は本文を差し替えず、相手が更新したことだけ知らせる
    box.querySelector(".want").innerHTML = starsHTML(id);
    const meta = box.querySelector(".note-meta");
    if (meta) meta.innerHTML = noteChangedByOther(id) ? `<span class="warn">相手がこのメモを更新しました（保存時に確認します）</span>` : noteMeta(id);
    return;
  }
  box.innerHTML = socialHTML(BY_ID[id]);
}
function refreshSocialAll() {
  renderTabs();
  if (ui.tab === "fav") renderFav();
  else if (ui.view === "table" || ui.sort === "want" || ui.starred) {
    if (!document.activeElement || !document.activeElement.matches("textarea")) renderAll();
  } else ITEMS.forEach(it => { if (it.cat === ui.tab) refreshSocial(it.id); });
}

/* ---------- ライトボックス ---------- */
const lb = { list: [], i: 0 };
function openLightbox(id, kind) {
  lb.list = galleryImages(BY_ID[id]);
  lb.i = Math.max(0, lb.list.findIndex(x => x.kind === kind));
  showLightbox();
  $("#lightbox").classList.remove("hidden");
  $("#lightbox").setAttribute("aria-hidden", "false");
}
function showLightbox() {
  const cur = lb.list[lb.i];
  if (!cur) return;
  $("#lb-img").src = cur.src;
  $("#lb-cap").textContent = `${cur.cap}（${lb.i + 1}/${lb.list.length}）`;
}
function closeLightbox() { $("#lightbox").classList.add("hidden"); $("#lightbox").setAttribute("aria-hidden", "true"); }
function stepLightbox(d) { if (!lb.list.length) return; lb.i = (lb.i + d + lb.list.length) % lb.list.length; showLightbox(); }

/* ---------- イベント ---------- */
function toggleIn(arr, v) { const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); }
function jumpTo(id) {
  const it = BY_ID[id];
  if (!it) return;
  if (ui.view !== "cards") { ui.view = "cards"; saveUI(); }   // 一覧表から飛んでもカードが開くように
  showTab(it.cat, id);
}
function bind() {
  document.addEventListener("click", e => {
    const t = e.target.closest("button, a, tr[data-goto]");
    if (!t) return;
    if (t.dataset.tab) { history.replaceState(null, "", "#" + t.dataset.tab); showTab(t.dataset.tab); return; }
    if (t.dataset.jump) { e.preventDefault(); history.replaceState(null, "", "#" + t.dataset.jump); jumpTo(t.dataset.jump); return; }
    if (t.dataset.goto) { history.replaceState(null, "", "#" + t.dataset.goto); jumpTo(t.dataset.goto); return; }
    if (t.dataset.lb) { openLightbox(t.dataset.lb, t.dataset.kind); return; }
    if (t.dataset.tryon) { ui.tryon = t.dataset.tryon; saveUI(); renderAll(); return; }
    if (t.dataset.view) { ui.view = t.dataset.view; saveUI(); renderItems(); return; }
    if (t.dataset.wantClear !== undefined) { const card = t.closest("[data-id]"); if (card) clearWant(card.dataset.id); return; }
    if (t.id === "clear-my-wants") { clearAllMyWants(); return; }
    if (t.dataset.want) { const card = t.closest("[data-id]"); if (card) setWant(card.dataset.id, parseInt(t.dataset.want, 10)); return; }
    if (t.dataset.filter) {
      const g = t.dataset.filter;
      if (g === "starred") ui.starred = !ui.starred; else toggleIn(ui[g], t.dataset.value);
      saveUI(); renderItems(); return;
    }
    if (t.id === "clear-filters") { clearFilters(); saveUI(); renderItems(); return; }
    if (t.id === "lb-close") closeLightbox();
    if (t.id === "lb-prev") stepLightbox(-1);
    if (t.id === "lb-next") stepLightbox(1);
  });
  document.addEventListener("keydown", e => {
    if (!$("#lightbox").classList.contains("hidden")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    } else if (e.key === "Enter" && e.target.matches("tr[data-goto]")) jumpTo(e.target.dataset.goto);
  });
  $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("change", e => {
    if (e.target.id === "sort") { ui.sort = e.target.value; saveUI(); renderItems(); }
  });
  // メモはフォーカスが外れたときに保存（1文字ごとに送らない）
  document.addEventListener("focusin", e => {
    const ta = e.target.closest && e.target.closest("textarea[data-note]");
    if (ta && !ta.readOnly) beginNote(ta.dataset.note, ta);
  });
  document.addEventListener("focusout", e => {
    const ta = e.target.closest && e.target.closest("textarea[data-note]");
    if (!ta || ta.readOnly) return;
    endNote(ta.dataset.note, ta.value, ta);
    const meta = ta.parentElement && ta.parentElement.querySelector(".note-meta");
    if (meta) meta.innerHTML = noteMeta(ta.dataset.note);
  });
  window.addEventListener("hashchange", routeFromHash);
}
function routeFromHash() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (BY_ID[h]) jumpTo(h);
  else if (TABS.some(t => t.key === h)) showTab(h);
}

/* ---------- 起動 ---------- */
window.Catalog = { onAuth, setStatus, clearCache, parsePrice, beginNote, endNote, state: () => ({ ui, shared, myUid, syncState, unlocked }) };
bind();
if (location.hash) routeFromHash(); else renderAll();
refreshStatus();
// Firebase の読み込み自体に失敗したとき、ログイン画面が「確認しています…」のまま止まらないようにする
setTimeout(() => { if (!window.FB && !PREVIEW) setStatus("接続できませんでした。通信状態を確認して再読み込みしてください。", "error"); }, 8000);
window.dispatchEvent(new Event("catalog-ready"));
