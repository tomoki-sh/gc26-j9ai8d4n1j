/* 誕生日プレゼント比較カタログの公開データ。tools/extract_docx.py が docx から生成する。
   手で直さず、docx を直してから再生成する。氏名は含めない。 */
const DATA = {
 "sections": {
  "hair": {
   "kicker": "髪を結ぶ日常に添える、現在の中心候補",
   "title": "ヘアアクセサリー",
   "lead": [
    "並び順は、贈る側が 2026-09-20 に決めたおすすめ順です（1位 H17、2位 H04、3位 H18）。カードの「確認」は、買う前に確かめたいことです。",
    "クリップやバレッタは、髪量と普段の留め方で使い心地が変わります。"
   ]
  },
  "accent": {
   "kicker": "手持ちのジュエリーと役割を分ける",
   "title": "脇役アクセサリー",
   "lead": []
  },
  "jewelry": {
   "kicker": "アクセサリー検討初期の候補を保存",
   "title": "ネックレス・ピアス",
   "lead": [
    "並び順は、9月の誕生日にちなむか・手持ちの主役と競わないか・今から買えるかで付けたおすすめ順です（1位 J19、2位 J21、3位 J20）。カードの「確認」は、買う前に確かめたいことです。",
    "当初はシンプルなネックレスを推していましたが、手持ちのカルティエ等との重複が分かった後に優先順位を下げました。型番未特定だった商品は、公式ページで確認できた候補に置き換えました（J08）。"
   ]
  },
  "binocular": {
   "kicker": "ライブ用品として比較した全機種",
   "title": "双眼鏡",
   "lead": [
    "現在のヘアアクセサリー案と同列に推奨するものではありません。8倍／10倍、口径、重さ、実視界の違いを保存しています。使用者の手ブレや眼幅への適合、実際の座席で満足度は変わります。",
    "数値の「明るさ」は見た目の明るさの倍率をそのまま意味しません。過去に挙げた口コミ評価・点数は本資料で原文の再照合ができていないため、確定的な優劣として転載していません。"
   ]
  },
  "live": {
   "kicker": "耳栓はイヤホンではなく、音量を抑える道具",
   "title": "ライブ小物",
   "lead": []
  },
  "official": {
   "kicker": "すでに所有している可能性が高く、現在は見送り",
   "title": "HANA公式・関連",
   "lead": [
    "以下は過去の検討記録です。「9月4日受注締切」「11月下旬発送」等の当時の案内を、現在も販売中であるかのようには扱いません。本人との重複を避ける方針で、今回は見送りです。"
   ]
  },
  "daily": {
   "kicker": "趣味・生活習慣の確認を前提にした旧候補",
   "title": "生活用品",
   "lead": []
  },
  "experience": {
   "kicker": "日程・内容が確定していない提案も含む",
   "title": "体験・ギフト案",
   "lead": [
    "体験の料金には、当時のプラン例と概算が混在します。予約・空き・有効期限・二人分の総額は未確定です。"
   ]
  }
 },
 "items": [
  {
   "id": "H01",
   "brand": "ALEXANDRE DE PARIS",
   "name": "パール付きシュシュ",
   "model": "TCHC-25T-A23",
   "price": "33,000円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "黒／約11×10cm。レーヨン・シルク生地、クリスタルパール装飾。",
   "reason": "休日にも使う贈り物らしさ。手持ちのネックレスと競合しない。",
   "caution": "洗濯・クリーニング不可と案内。病院での使用可否は院内規則を優先。",
   "use": [
    "通勤",
    "会食",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_TCHC-25T-A23_1/N"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_TCHC-25T-A23_1/N"
    }
   ],
   "images": {
    "item": "images/products/H01_item.jpg",
    "wear": "images/products/H01_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 4,
   "check": "手入れ方法を確認"
  },
  {
   "id": "H02",
   "brand": "ALEXANDRE DE PARIS",
   "name": "LISERAI ポニー",
   "model": "APY-17485-02P23",
   "price": "26,400円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "黒い曲面プレートにべっ甲調の縁取り。フランス製。",
   "reason": "シックで、日常の一つ結びにそのまま足せる。",
   "caution": "普通のゴムで先に結び、その上に装着。飾りを引っ張らない。アルコール清拭には不向き。",
   "use": [
    "日常の一つ結び"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_APY-17485-02P23_1/NT"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_APY-17485-02P23_1/NT"
    }
   ],
   "images": {
    "item": "images/products/H02_item.jpg",
    "wear": "images/products/H02_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 7,
   "check": "手入れ方法を確認"
  },
  {
   "id": "H03",
   "brand": "ALEXANDRE DE PARIS",
   "name": "ポニー APY-78",
   "model": "APY-78",
   "price": "15,400円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "黒い湾曲プレートのベーシックな飾り付きゴム。",
   "reason": "控えめさと取り入れやすさを重視する場合。",
   "caution": "使用法・ゴム交換対応を正規店で確認。",
   "use": [
    "日常の一つ結び"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_APY-78"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_APY-78"
    }
   ],
   "images": {
    "item": "images/products/H03_item.jpg",
    "wear": "images/products/H03_wear.jpg"
   },
   "wearLabel": "着用参考（別色）",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 15,
   "check": "使い方・ゴム交換を確認"
  },
  {
   "id": "H04",
   "brand": "ALEXANDRE DE PARIS",
   "name": "LISERAI バレッタ 8cm",
   "model": "AA8-12689-03",
   "price": "34,100円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "黒縁のベージュ系、左右非対称リボン。",
   "reason": "きれいめの服装やハーフアップを好む場合に。",
   "caution": "リボンの好み・髪量・留め方の確認が必要。仕事用の控えめさより華やかさ重視。",
   "use": [
    "会食",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_AA8-12689-03"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_AA8-12689-03"
    }
   ],
   "images": {
    "item": "images/products/H04_item.jpg",
    "wear": "images/products/H04_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 2,
   "check": "髪量・留め方を確認"
  },
  {
   "id": "H05",
   "brand": "ALEXANDRE DE PARIS",
   "name": "BASIC CLASSIQUES クリップ M",
   "model": "ACCM-7705",
   "price": "18,700円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "石や大きなモチーフを省いた定番クリップ。",
   "reason": "クリップを日常的に使う人の上質な普段使い用。",
   "caution": "髪量・ねじり上げる習慣が不明。Mを一律に推奨しない。",
   "use": [
    "まとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_ACCM-7705"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_ACCM-7705"
    }
   ],
   "images": {
    "item": "images/products/H05_item.jpg",
    "wear": "images/products/H05_wear.jpg"
   },
   "wearLabel": "着用参考（別色）",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 11,
   "check": "髪量・留め方を確認"
  },
  {
   "id": "H06",
   "brand": "ALEXANDRE DE PARIS",
   "name": "BASIC CLASSIQUES クリップ L",
   "model": "ACCL-7706",
   "price": "20,900円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "黒い定番クリップ。スレッド記載寸法：横11×縦4.5cm。",
   "reason": "髪が長く、量のあるクリップ派に。",
   "caution": "大きければ使いやすいとは限らない。手術帽への収まりも要確認。",
   "use": [
    "まとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_ACCL-7706"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_ACCL-7706"
    }
   ],
   "images": {
    "item": "images/products/H06_item.jpg",
    "wear": "images/products/H06_wear.jpg"
   },
   "wearLabel": "着用参考（別色）",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 18,
   "check": "大きさ・髪量を確認"
  },
  {
   "id": "H07",
   "brand": "ACCA",
   "name": "ティアラクイーン クリップ M",
   "model": "70900033",
   "price": "26,400円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "クリスタル装飾のある定番。幅7.3cmと紹介。",
   "reason": "まとめ髪に少し華やかさを足す。",
   "caution": "石飾りが目立つ。髪量と勤務先の装飾ルールが不明なら優先度を下げる。",
   "use": [
    "休日",
    "まとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://acca-store.com/c/gr11/70900033"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://acca-store.com/c/gr11/70900033"
    }
   ],
   "images": {
    "item": "images/products/H07_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "hair",
   "rank": 5,
   "check": "髪量・職場のルールを確認"
  },
  {
   "id": "H08",
   "brand": "ACCA",
   "name": "レヴル クリップ M",
   "model": "70900102",
   "price": "14,300円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "石なし。黒い樹脂と金色の歯、幅7.3cm。",
   "reason": "石飾りを避けたいクリップ派に。",
   "caution": "過去回答では公式在庫切れ。最新在庫・髪量との適合を確認。",
   "use": [
    "日常のまとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://acca-store.com/c/gr11/70900102"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://acca-store.com/c/gr11/70900102"
    }
   ],
   "images": {
    "item": "images/products/H08_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "hair",
   "rank": 14,
   "check": "髪量・在庫を確認"
  },
  {
   "id": "H09",
   "brand": "ACCA",
   "name": "レヴル クリップ L",
   "model": "70900103",
   "price": "17,600円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "Mと同系統の大きめサイズ。幅9.5cmと紹介。",
   "reason": "髪量が多い人で、Mでは収まりにくい場合。",
   "caution": "黒の在庫は未確認。在庫を理由にサイズを変えない。",
   "use": [
    "日常のまとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://acca-store.com/c/gr11/70900103"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://acca-store.com/c/gr11/70900103"
    }
   ],
   "images": {
    "item": "images/products/H09_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "hair",
   "rank": 17,
   "check": "髪量・在庫を確認"
  },
  {
   "id": "H10",
   "brand": "colette malouf",
   "name": "ルーサイト ポニーカフ ウィズ メタルプレート",
   "model": "25LF-512-57-2",
   "price": "25,300円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "約3×5cm。アクリルと真鍮で毛束を覆う形。",
   "reason": "黒に金色のラインを足す、モダンな脇役アクセサリー。",
   "caution": "小さな飾りではない。最小限の装飾を求める職場ではH02を優先。",
   "use": [
    "仕事",
    "休日の一つ結び"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://thehairbar.jp/products/ルーサイト-ポニーカフ-ウィズ-メタルプレート"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://thehairbar.jp/products/ルーサイト-ポニーカフ-ウィズ-メタルプレート"
    }
   ],
   "images": {
    "item": "images/products/H10_item.jpg",
    "wear": "images/products/H10_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 8,
   "check": "飾りの大きさを確認"
  },
  {
   "id": "H11",
   "brand": "colette malouf",
   "name": "メタル ダイヤモンド ポニーカフ",
   "model": "",
   "price": "28,600円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "約2.5×4cm。ネイビーの真鍮とクリスタルガラス。",
   "reason": "黒だけでは地味に感じる場合の、控えめな輝き。",
   "caution": "名称のダイヤモンドは本物のダイヤではない。石飾りの許容度を確認。",
   "use": [
    "休日",
    "会食の一つ結び"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://thehairbar.jp/products/メタル-ダイヤモンド-ポニーカフ"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://thehairbar.jp/products/メタル-ダイヤモンド-ポニーカフ"
    }
   ],
   "images": {
    "item": "images/products/H11_item.jpg",
    "wear": "images/products/H11_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 6,
   "check": "石飾りの好みを確認"
  },
  {
   "id": "H12",
   "brand": "THBT",
   "name": "メタル ダブルライン ポニー",
   "model": "",
   "price": "25,300円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "装着写真はゴールド色。単体写真はサテンシルバー。色違いの参考。"
   ],
   "features": "約2×5cm。真鍮の中抜きフレーム。サテン仕上げ。",
   "reason": "リボンや花を避け、造形で選ぶ。",
   "caution": "黒い樹脂より金属感が目立つ。装着写真はゴールド系の色違い。",
   "use": [
    "一つ結び",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://thehairbar.jp/products/メタル-ダブルライン-ポニー"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://thehairbar.jp/products/メタル-ダブルライン-ポニー"
    }
   ],
   "images": {
    "item": "images/products/H12_item.jpg",
    "wear": "images/products/H12_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "rank": 9,
   "check": "色を確認（写真は別色）"
  },
  {
   "id": "H13",
   "brand": "THBT",
   "name": "メタル ジェム ポニーカフ",
   "model": "",
   "price": "16,500円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "約1.2×4.7cm。真鍮。細い金属アクセント。",
   "reason": "大ぶりの装飾を避けつつ、結び目に質感を加える。",
   "caution": "ローズゴールド等の色味の好みを確認。病院用としての適合は未検証。",
   "use": [
    "一つ結び"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://thehairbar.jp/products/メタル-ジェム-ポニーカフ"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://thehairbar.jp/products/メタル-ジェム-ポニーカフ"
    }
   ],
   "images": {
    "item": "images/products/H13_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "hair",
   "rank": 12,
   "check": "色味の好みを確認"
  },
  {
   "id": "H14",
   "brand": "LETICIA",
   "name": "VALLETTA-NOIR 01",
   "model": "24011101-19",
   "price": "15,400円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [],
   "features": "黒いアセテート。幅9×縦4cm、丸みのある造形。",
   "reason": "黒い造形を気に入って選ぶ。",
   "caution": "髪量・バレッタの使い方に依存。過去回答で売り切れと記載。",
   "use": [
    "結び目",
    "ハーフアップ"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://leticiaofficial.com/products/24011101-19"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://leticiaofficial.com/products/24011101-19"
    }
   ],
   "images": {
    "item": "images/products/H14_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "hair",
   "rank": 16,
   "check": "髪量・在庫を確認"
  },
  {
   "id": "H15",
   "brand": "France Luxe",
   "name": "キルテッド ミディアム ジョー",
   "model": "",
   "price": "23,320円",
   "priceNote": "今回取得した公式ページの掲載値（2026-09-17閲覧）",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "ブラック。9×5cm、25g。セルロースアセテート・合金。",
   "reason": "控えめなキルティング模様。実用寄りのクリップ候補。",
   "caution": "クリップ派かどうかが不明。写真の大きさだけで髪量適合を判断しない。",
   "use": [
    "日常のまとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.franceluxe.jp/view/item/000000001655"
    }
   ],
   "images": {
    "item": "images/products/H15_item.jpg",
    "wear": "images/products/H15_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "photoExtra": true,
   "rank": 10,
   "check": "髪量・留め方を確認"
  },
  {
   "id": "H16",
   "brand": "France Luxe",
   "name": "エリーゼ ジョー",
   "model": "",
   "price": "17,160円",
   "priceNote": "今回取得した公式一覧掲載値",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "ブラックのヘアクリップとして紹介。",
   "reason": "高級感よりも、使う形・好みで比較する候補。",
   "caution": "型番・髪量適合・最新在庫は購入前確認。",
   "use": [
    "まとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.franceluxe.jp/view/category/jaw"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.franceluxe.jp/view/item/000000000679"
    }
   ],
   "images": {
    "item": "images/products/H16_item.jpg",
    "wear": "images/products/H16_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "hair",
   "photoExtra": true,
   "rank": 13,
   "check": "髪量・在庫を確認"
  },
  {
   "id": "H17",
   "brand": "ALEXANDRE DE PARIS",
   "name": "【VENDOME】M クリップ（ブラウン）",
   "model": "ICCM-15571-04（色 H2）",
   "price": "34,100円",
   "priceNote": "2026-09-19 に公式ページで確認（在庫わずか）",
   "notes": [
    "商品：docx 作成後に追加（2026-09-19）。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "ブラウンの酢酸セルロースに同系色のスワロフスキー・クリスタルを散らしたヴァンドームクリップ。爪は24金プレート。フランス製。",
   "reason": "定番のヴァンドームクリップを、黒ではなく深いブラウンで。まとめ髪を華やかにしたい日に。",
   "caution": "髪量・ねじり上げる習慣が不明。石の配置は個体差あり。色違いのブラック（N3）は公式で在庫なし。",
   "use": [
    "まとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_ICCM-15571-04_1/H2"
    }
   ],
   "images": {
    "item": "images/products/H17_item.jpg",
    "wear": "images/products/H17_wear.jpg"
   },
   "wearLabel": "着用参考（別色の可能性あり）",
   "hasWearPhoto": true,
   "cat": "hair",
   "added": true,
   "photoExtra": true,
   "rank": 1,
   "check": "髪量・留め方を確認"
  },
  {
   "id": "H18",
   "brand": "ALEXANDRE DE PARIS",
   "name": "【VENDOME】M クリップ（ブラック）",
   "model": "ICCM-15571-04（色 N3）",
   "price": "34,100円",
   "priceNote": "2026-09-19 に公式ページで確認（公式は在庫なし・再入荷メール受付）",
   "notes": [
    "商品：docx 作成後に追加（2026-09-19）。H17 の色違い。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "黒の酢酸セルロースに、シャンパンゴールド系のスワロフスキー・クリスタルを散らしたヴァンドームクリップ。爪は24金プレート。フランス製。",
   "reason": "定番のヴァンドームクリップを黒で。手持ちの服や黒い髪飾りと合わせやすい。",
   "caution": "公式オンラインでは在庫なし（2026-09-19時点）。店舗在庫や再入荷の確認が必要。髪量・ねじり上げる習慣が不明。石の配置は個体差あり。",
   "use": [
    "まとめ髪"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://alexandredeparis.co.jp/item/detail/1_1_ICCM-15571-04_1/N3"
    }
   ],
   "images": {
    "item": "images/products/H18_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "hair",
   "added": true,
   "photoExtra": true,
   "rank": 3,
   "check": "在庫を確認"
  },
  {
   "id": "J01",
   "brand": "Hirotaka",
   "name": "ゴールドクレスト スクエアイヤーカフ",
   "model": "BP171UMF",
   "price": "36,300円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "SV925＋K10YG、外径約1.4cm。",
   "reason": "手持ちのピアスを使いながら足せる。混色や幾何学形状が好きなら。",
   "caution": "耳の形で痛み・脱落が変わるため試着推奨。",
   "use": [
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://hiro-taka.com/products/bp171umf"
    }
   ],
   "images": {
    "item": "images/products/J01_item.jpg",
    "wear": "images/products/J01_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "accent",
   "photoExtra": true,
   "check": "耳の形に合うか試着"
  },
  {
   "id": "J02",
   "brand": "Hirotaka",
   "name": "MANHATTAN ポリゴン ダイヤモンド イヤーカフ",
   "model": "MH88SDF",
   "price": "36,300円（今回取得）／39,600円（スレッド）",
   "priceNote": "国内公式の取得表示とスレッド記載が異なるため併記",
   "notes": [
    "耳上部のポリゴン型イヤーカフが対象。ほかの装着品は付属しない。"
   ],
   "features": "SV925、ダイヤ0.04ct、外径約2cm。",
   "reason": "直線的でモダンな耳元。休日の脇役に。",
   "caution": "価格は過去回答と取得表示が相違。片耳用。試着・会計時の確認を。",
   "use": [
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://store.hiro-taka.com/products/mh88sdf"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://store.hiro-taka.com/products/mh88sdf"
    }
   ],
   "images": {
    "item": "images/products/J02_item.jpg",
    "wear": "images/products/J02_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "accent",
   "check": "片耳用・価格を確認"
  },
  {
   "id": "J03",
   "brand": "TOM WOOD",
   "name": "Ear Cuff Thick",
   "model": "",
   "price": "22,300円",
   "priceNote": "今回取得した公式ページの掲載値（2026-09-17閲覧）",
   "notes": [
    "公式モデル着用例。ほかのピアス等は付属しない。"
   ],
   "features": "SV925、ホワイトロジウム。S/M/L、単品販売。",
   "reason": "シンプル・モード系の服装に。",
   "caution": "調整不可。曲げない。耳に合うサイズ選びが必要。",
   "use": [
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.tomwoodproject.com/en-jp/products/ear-cuff-thick"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.tomwoodproject.com/en-jp/products/ear-cuff-thick"
    }
   ],
   "images": {
    "item": "images/products/J03_item.jpg",
    "wear": "images/products/J03_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "accent",
   "check": "耳に合う大きさを確認"
  },
  {
   "id": "J05",
   "brand": "HERMÈS",
   "name": "スカーフリング ツイリー 《ミニ・モール》",
   "model": "H601972Sv00",
   "price": "31,900円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "真鍮製。小型スカーフ用のリング。",
   "reason": "手持ちのツイリー等の使い方を広げる。",
   "caution": "対応スカーフを実際に使う人に限る。金無垢ジュエリーではない。",
   "use": [
    "スカーフを使う外出"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.hermes.com/jp/ja/product/スカーフリング-ツイリー-《ミニ・モール》-H601972Sv00/"
    }
   ],
   "images": {
    "item": "images/products/J05_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "accent",
   "photoExtra": true,
   "check": "スカーフを使うか確認"
  },
  {
   "id": "J08",
   "brand": "ヴァンドーム青山",
   "name": "ダイヤモンド ネックレス（三日月と星）",
   "model": "AJVN135740DI",
   "price": "35,200円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）",
    "品番：docx の「K10 ベーシックネックレス」（型番未特定・35,200円）を、2026-09-19 に公式ページで確認した候補の商品に置き換えてカード化。"
   ],
   "features": "K10イエローゴールド・ダイヤモンド。三日月に星を添えたモチーフ。長さ約40cm、トップ約5.3×6.4mm。",
   "reason": "比較履歴として保存。",
   "caution": "元の商品カード（K10 ベーシックネックレス・35,200円）と同一かは未確認。名前に「ベーシック」とあったが、この商品は三日月と星のモチーフで、一粒ダイヤのみのデザインではない。",
   "use": [
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://vendome.jp/aoyama/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://vendome.jp/aoyama/item/AJVN135740DI"
    }
   ],
   "images": {
    "item": "images/products/J08_item.jpg",
    "wear": "images/products/J08_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "photoExtra": true,
   "rank": 11,
   "check": "同じ商品か確認"
  },
  {
   "id": "J10",
   "brand": "ete",
   "name": "K10YG 一粒ダイヤモンドネックレス",
   "model": "761825",
   "price": "33,000円（公式取得）／38,500円（旧カード）",
   "priceNote": "今回取得した型番761825は33,000円。旧カードとの同一性は未確定",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "0.02ct、約40cm。品番761825として紹介。",
   "reason": "華奢な重ね着けを本人が希望するなら。",
   "caution": "過去本文と商品カードの価格が不一致。手持ちとの重複を確認。",
   "use": [
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.eteweb.com/items/761825"
    }
   ],
   "images": {
    "item": "images/products/J10_item.jpg",
    "wear": "images/products/J10_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "photoExtra": true,
   "rank": 12,
   "check": "手持ちと重なりを確認"
  },
  {
   "id": "J13",
   "brand": "TAKE-UP",
   "name": "誕生花ジュエリー 7月ユリネックレス",
   "model": "",
   "price": "29,700円／カード57,200円",
   "priceNote": "今回取得した公式ページの掲載値（2026-09-17閲覧）",
   "notes": [],
   "features": "K10YG、ブルームーンストーン、ルビー。約8×9mmと紹介。",
   "reason": "花モチーフ好きなら、YURIにちなむ選定理由を持たせられる。",
   "caution": "誕生月が7月とは限らない。過去カードと本文の価格・同一性は未解決。",
   "use": [
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.take-up.jp/products/detail5593"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.take-up.jp/products/detail5593"
    }
   ],
   "images": {
    "item": "images/products/J13_item.jpg",
    "wear": "images/products/J13_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "rank": 6,
   "check": "誕生月・価格を確認"
  },
  {
   "id": "J19",
   "brand": "TAKE-UP",
   "name": "誕生花ジュエリー 9月リンドウ透かしネックレス",
   "model": "2515727",
   "price": "29,700円",
   "priceNote": "2026-09-20 に公式ページで確認（残りわずか）",
   "features": "K10YG、ブルーサファイヤ、ブルークォーツ。トップ約9.0×7.2mm、チェーン約40cm（アジャスターカン付き）。日本製。花言葉カード付きの専用ケース。",
   "reason": "9月生まれに合わせた誕生花シリーズ。J13（7月ユリ）の差し替え候補。誕生花と誕生石の両方を取り入れられる。",
   "caution": "花モチーフが好みかを確認。青い石はすべてサファイヤではなく、ブルークォーツも含む。公式は残りわずか。",
   "use": [
    "休日",
    "会食"
   ],
   "notes": [
    "商品：docx 作成後に追加（2026-09-20）。9月の誕生花・誕生石の候補として調査。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "links": [
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.take-up.jp/products/detail5660"
    }
   ],
   "images": {
    "item": "images/products/J19_item.jpg",
    "wear": "images/products/J19_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "added": true,
   "photoExtra": true,
   "rank": 1,
   "check": "好み・在庫を確認"
  },
  {
   "id": "J20",
   "brand": "TAKE-UP",
   "name": "誕生花ジュエリー 9月リンドウ透かしピアス",
   "model": "2514418",
   "price": "29,700円",
   "priceNote": "2026-09-20 に公式ページで確認",
   "features": "K10YG、ブルーサファイヤ（ポスト・キャッチはK18YG）。縦約6.4×横約6.7mm。",
   "reason": "手持ちのネックレスをそのまま使い、耳元に9月の意味を添えられる。",
   "caution": "ピアス穴の有無と、普段ピアスを使うかを確認。約6.7mmで極小ではない。衛生商品のため返品対象外。",
   "use": [
    "休日",
    "会食"
   ],
   "notes": [
    "商品：docx 作成後に追加（2026-09-20）。9月の誕生花・誕生石の候補として調査。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "links": [
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.take-up.jp/products/detail5659"
    }
   ],
   "images": {
    "item": "images/products/J20_item.jpg",
    "wear": "images/products/J20_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "added": true,
   "photoExtra": true,
   "rank": 3,
   "check": "ピアス穴を確認"
  },
  {
   "id": "J21",
   "brand": "TAKE-UP",
   "name": "［セカンドピアス］Ptブルーサファイヤピアス",
   "model": "3873860",
   "price": "29,700円",
   "priceNote": "2026-09-20 に公式ページで確認（残りわずか）",
   "features": "プラチナ900、ブルーサファイヤ。縦横約3.0mm。8本爪で石を留めたスタッド。",
   "reason": "モチーフを抑えた9月の誕生石。手持ちの装いに青を少し足す脇役として選びやすい。",
   "caution": "約3mmと控えめで、箱を開けたときの華やかさは小さい。ピアス穴の有無と、白い地金の好みを確認。衛生商品のため返品対象外。",
   "use": [
    "通勤",
    "休日",
    "会食"
   ],
   "notes": [
    "商品：docx 作成後に追加（2026-09-20）。9月の誕生花・誕生石の候補として調査。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "links": [
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.take-up.jp/products/detail6311"
    }
   ],
   "images": {
    "item": "images/products/J21_item.jpg",
    "wear": "images/products/J21_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "added": true,
   "photoExtra": true,
   "rank": 2,
   "check": "ピアス穴・地金の好みを確認"
  },
  {
   "id": "J22",
   "brand": "sowi",
   "name": "K10YG ティールサファイアネックレス｜Plume Muse",
   "model": "309N0451-TY",
   "price": "29,700円",
   "priceNote": "2026-09-20 に公式ページで確認（数量限定・売り切れ）",
   "features": "K10YG、ティールサファイア。スクエアカットの石を粒飾りの石座で縁取り。トップ約5.5×5.0mm（バチカン含む）、チェーン全長40cm（3cm下アジャスター）。",
   "reason": "定番の白い石とは違う、青緑の色と造形を楽しむ選択肢。",
   "caution": "公式オンラインは売り切れ（2026-09-20時点）。数量限定・一点ものは再製作の対象外と案内。天然石のため色味に個体差。",
   "use": [
    "休日",
    "会食"
   ],
   "notes": [
    "商品：docx 作成後に追加（2026-09-20）。9月の誕生花・誕生石の候補として調査。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "links": [
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.sowi.jp/products/309n0451-ty-260907"
    }
   ],
   "images": {
    "item": "images/products/J22_item.jpg",
    "wear": "images/products/J22_wear.jpg"
   },
   "wearLabel": "着用例（同シリーズのリングも着けた写真）",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "added": true,
   "photoExtra": true,
   "rank": 9,
   "check": "在庫を確認"
  },
  {
   "id": "J23",
   "brand": "TAKE-UP",
   "name": "K10 サファイヤ スターレット バースストーンネックレス（YG）",
   "model": "1644727",
   "price": "28,600円",
   "priceNote": "2026-09-20 に公式ページで確認（残りわずか）",
   "features": "K10YG、サファイヤ。トップ約4.5×3.8mm、チェーン約40cm（アジャスターカン付き）。",
   "reason": "花モチーフを避けつつ、9月の青い石そのものを小さく楽しむ形。重ね着けにも使える大きさ。",
   "caution": "手持ちの定番ネックレスと使う場面が重なりやすい。公式は残りわずか。",
   "use": [
    "休日",
    "通勤"
   ],
   "notes": [
    "商品：docx 作成後に追加（2026-09-20）。9月の誕生花・誕生石の候補として調査。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "links": [
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.take-up.jp/products/detail5178"
    }
   ],
   "images": {
    "item": "images/products/J23_item.jpg",
    "wear": "images/products/J23_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "added": true,
   "photoExtra": true,
   "rank": 5,
   "check": "手持ちと重なり・在庫を確認"
  },
  {
   "id": "J24",
   "brand": "ete bijoux",
   "name": "［プレシャスシングス］K10YG サファイア チャーム／Star",
   "model": "706076",
   "price": "25,300円",
   "priceNote": "2026-09-20 に公式ページで確認（在庫なし・再入荷リクエスト受付）",
   "features": "K10YG（ニッケルフリー）、サファイア。星形のチャーム単体で、チェーンは付属しない。公式にmm表記なし。",
   "reason": "主役は手持ちに譲り、誕生石の小さな要素だけを足す考え方に合う。",
   "caution": "公式オンラインは在庫なし（2026-09-20時点）。店舗在庫の確認が必要。手持ちのチェーンに通るか、重ねたときに傷つけ合わないかも要確認。",
   "use": [
    "休日"
   ],
   "notes": [
    "商品：docx 作成後に追加（2026-09-20）。9月の誕生花・誕生石の候補として調査。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "links": [
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.eteweb.com/items/706076"
    }
   ],
   "images": {
    "item": "images/products/J24_item.jpg",
    "wear": "images/products/J24_wear.jpg"
   },
   "wearLabel": "着用例（チェーンは参考商品）",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "added": true,
   "photoExtra": true,
   "rank": 10,
   "check": "在庫・チェーン適合を確認"
  },
  {
   "id": "J25",
   "brand": "L&Co.",
   "name": "K10 クンツァイト ネックレス",
   "model": "63-3800",
   "price": "29,700円",
   "priceNote": "2026-09-20 に公式ページで確認（在庫あり）",
   "features": "K10YG、クンツァイト。最大幅 約5.0×5.5mm、チェーン40cm。ジュエリーボックス付き。",
   "reason": "9月のもう一つの誕生石。青ではなく、紫を帯びた淡いピンクを選びたい場合に。",
   "caution": "青い石を好むかどうかで評価が変わる。淡い色のため、肌なじみは実物で確認したい。",
   "use": [
    "休日",
    "会食"
   ],
   "notes": [
    "商品：docx 作成後に追加（2026-09-20）。9月の誕生花・誕生石の候補として調査。",
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "links": [
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://l-co-shop.jp/products/63-3800"
    }
   ],
   "images": {
    "item": "images/products/J25_item.jpg",
    "wear": "images/products/J25_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "added": true,
   "photoExtra": true,
   "rank": 4,
   "check": "石の色の好みを確認"
  },
  {
   "id": "J15",
   "brand": "TSUTSUMI",
   "name": "K18YG アコヤ真珠ピアス 7.5mm",
   "model": "RPE951-002",
   "price": "30,000円",
   "priceNote": "今回取得した公式ページの掲載値（2026-09-17閲覧）",
   "notes": [],
   "features": "一粒アコヤ真珠、K18YG。",
   "reason": "会食・学会などにも使える定番。",
   "caution": "ピアス穴と既所有品を要確認。定番なので重複の可能性。",
   "use": [
    "会食",
    "フォーマル"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.tsutsumishop.jp/shop/g/gRPE951-002/"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.tsutsumishop.jp/shop/g/gRPE951-002/"
    }
   ],
   "images": {
    "item": "images/products/J15_item.jpg",
    "wear": "images/products/J15_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "rank": 7,
   "check": "ピアス穴・手持ちと重なりを確認"
  },
  {
   "id": "J16",
   "brand": "TSUTSUMI",
   "name": "プラチナアコヤ真珠ピアス（7.5mm）",
   "model": "RPE182",
   "price": "30,000円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）",
    "品番：docx 作成後に公式ページで名称・素材（Pt900）・サイズ・価格の一致を確認（2026-09-19）。"
   ],
   "features": "J15のプラチナ仕様としてスレッドで紹介。",
   "reason": "白い地金を好む場合。",
   "caution": "30,000円は公式ページの「特別価格」表示。通常価格の記載はない。",
   "use": [
    "会食",
    "フォーマル"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.tsutsumishop.jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.tsutsumishop.jp/shop/g/gRPE182/"
    }
   ],
   "images": {
    "item": "images/products/J16_item.jpg",
    "wear": "images/products/J16_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "jewelry",
   "photoExtra": true,
   "rank": 8,
   "check": "特別価格の扱いを確認"
  },
  {
   "id": "B01",
   "brand": "Vixen",
   "name": "アリーナH＋ 10×21WP",
   "model": "",
   "price": "13,200円",
   "priceNote": "今回取得したビクセン公式店の掲載値。実売店の価格は未更新",
   "notes": [],
   "features": "10倍／21mm／195g／実視界5.2°。",
   "reason": "軽さ優先のライブ入門機。",
   "caution": "32mm機より暗部や目位置の余裕が少ない。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/product/13445_8/"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.vixen-m.co.jp/item/13445_8.html"
    }
   ],
   "images": {
    "item": "images/products/B01_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "binocular",
   "check": "実機で見え方を確認"
  },
  {
   "id": "B02",
   "brand": "Vixen",
   "name": "アリーナH＋ 8×21WP",
   "model": "",
   "price": "過去カード8,690円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はピンク（5色あり）"
   ],
   "features": "8倍／21mm。低倍率・軽量路線。",
   "reason": "手ブレと携帯性重視。",
   "caution": "本文で詳細仕様の記載なし。10倍と混同しない。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/lp/arena-hplus/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.vixen.co.jp/product/13431_1/"
    }
   ],
   "images": {
    "item": "images/products/B02_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "binocular",
   "photoExtra": true,
   "check": "仕様を確認"
  },
  {
   "id": "B03",
   "brand": "Vixen",
   "name": "コールマン H8×25",
   "model": "",
   "price": "11,990円",
   "priceNote": "今回取得したビクセン公式店の掲載値。実売店の価格は未更新",
   "notes": [],
   "features": "8倍／25mm／300g／実視界6.3°。",
   "reason": "軽さと明るさの中間。",
   "caution": "遠い席での拡大率は10倍に劣る。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/product/14581_2/"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.vixen-m.co.jp/item/14581_2.html"
    }
   ],
   "images": {
    "item": "images/products/B03_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "binocular",
   "check": "実機で見え方を確認"
  },
  {
   "id": "B04",
   "brand": "Vixen",
   "name": "アトレックII HR8×32WP",
   "model": "",
   "price": "34,100円（メーカー希望）／33,000円（公式店取得）",
   "priceNote": "メーカー・公式店で取得値に差あり。旧実売目安19,000〜24,000円は未更新",
   "notes": [],
   "features": "8倍／32mm／390g／実視界7.5°／ひとみ径4mm。",
   "reason": "明るさと安定性を重視する旧本命候補。",
   "caution": "手持ちの疲労、髪飾りへ方針転換後は参考枠。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/product/14723_6/"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.vixen-m.co.jp/item/14723_6.html"
    }
   ],
   "images": {
    "item": "images/products/B04_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "binocular",
   "check": "重さを確認"
  },
  {
   "id": "B05",
   "brand": "Vixen",
   "name": "アトレックII HR10×32WP",
   "model": "",
   "price": "35,200円",
   "priceNote": "今回取得したビクセン公式店の掲載値。実売店の価格は未更新",
   "notes": [],
   "features": "10倍／32mm／390g／実視界6.0°。",
   "reason": "表情を大きく見たいライブ用途。",
   "caution": "防振なし。手ブレと重量の試用が必要。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/product/14724_3/"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.vixen-m.co.jp/item/14724_3.html"
    }
   ],
   "images": {
    "item": "images/products/B05_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "binocular",
   "check": "手ブレ・重さを試用"
  },
  {
   "id": "B06",
   "brand": "Vixen",
   "name": "アトレックII HR10×25WP",
   "model": "",
   "price": "過去カード21,599円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "10倍／25mm。携帯性重視の候補として登場。",
   "reason": "10倍を小口径で持ち運びたい場合。",
   "caution": "スレッド内に詳細仕様なし。32mmモデルと混同しない。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.vixen.co.jp/product/14722_9/"
    }
   ],
   "images": {
    "item": "images/products/B06_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "binocular",
   "photoExtra": true,
   "check": "仕様を確認"
  },
  {
   "id": "B07",
   "brand": "Vixen",
   "name": "APEX J HR8×32WP",
   "model": "",
   "price": "過去カード32,817円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "8倍／32mm。光学品質重視としてカード掲載。",
   "reason": "価格帯内の別機種として比較履歴に。",
   "caution": "本文の比較・実機検証は行われていない。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.vixen.co.jp/product/14542_3/"
    }
   ],
   "images": {
    "item": "images/products/B07_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "binocular",
   "photoExtra": true,
   "check": "実機で見え方を確認"
  },
  {
   "id": "B08",
   "brand": "Kenko",
   "name": "ウルトラビューEXコンパクト 8×32",
   "model": "",
   "price": "33,000円（メーカー希望）／旧実売25,000〜28,000円",
   "priceNote": "公式希望小売価格30,000円・税別を確認。旧実売価格は未更新",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "8倍／32mm／375g／実視界8.3°／ひとみ径4mm。",
   "reason": "HANA全体や暗い演出を見やすい旧本命。",
   "caution": "明るさは仕様指標。SWとの画質優劣の断定は実測で未確認。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.kenko-tokina.co.jp/optics/binoculars/highd/uvex01/compact_8x32.html"
    }
   ],
   "images": {
    "item": "images/products/B08_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "binocular",
   "photoExtra": true,
   "check": "実機で見え方を確認"
  },
  {
   "id": "B09",
   "brand": "Kenko",
   "name": "ウルトラビューEXコンパクト 10×32",
   "model": "",
   "price": "過去実売約2.9〜3.5万円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "10倍／32mm／370g／実視界6.7°。",
   "reason": "倍率・明るさ・重さのバランス。",
   "caution": "防振なし。眼幅・見口・重さは本人の適合を確認。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.kenko-tokina.co.jp/optics/binoculars/highd/uvex01/compact_10x32.html"
    }
   ],
   "images": {
    "item": "images/products/B09_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "binocular",
   "photoExtra": true,
   "check": "眼幅・見口を試用"
  },
  {
   "id": "B10",
   "brand": "Nikon",
   "name": "PROSTAFF P7 10×30",
   "model": "",
   "price": "23,100円（過去実売約2.1万円〜）",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "10倍／30mm／470g／実視界6.6°。",
   "reason": "価格を抑えた30mmの比較候補。",
   "caution": "ライブ長時間には重量が課題。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.nikon-image.com/products/sportoptics/binoculars/prostaff_p7_10x30/spec.html"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://nij.nikon.com/products/lineup/sportoptics/binoculars/prostaff_p7_10x30/"
    }
   ],
   "images": {
    "item": "images/products/B10_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "binocular",
   "photoExtra": true,
   "check": "重さを確認"
  },
  {
   "id": "B12",
   "brand": "Vixen",
   "name": "SW 8×25WP",
   "model": "",
   "price": "35,200円",
   "priceNote": "今回取得したビクセン公式店の掲載値。実売店の価格は未更新",
   "notes": [],
   "features": "8倍／25mm／333g／実視界9.4°／アイレリーフ18.3mm。",
   "reason": "広い舞台や動くメンバーを追う方向。",
   "caution": "10倍より小さく見える。眼幅・見口は試用推奨。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/product/13547_9/"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.vixen-m.co.jp/item/13547_9.html"
    }
   ],
   "images": {
    "item": "images/products/B12_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "binocular",
   "check": "眼幅・見口を試用"
  },
  {
   "id": "B13",
   "brand": "Vixen",
   "name": "SW 10×25WP",
   "model": "",
   "price": "37,400円",
   "priceNote": "今回取得したビクセン公式店の掲載値。実売店の価格は未更新",
   "notes": [],
   "features": "10倍／25mm／333g／実視界7.5°／アイレリーフ17.3mm。",
   "reason": "YURIを大きく見つつ広視界を確保する旧第一候補。",
   "caution": "8×32よりひとみ径が小さく、防振なし。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.vixen.co.jp/product/13548_6/"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.vixen-m.co.jp/item/13548_6.html"
    }
   ],
   "images": {
    "item": "images/products/B13_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": false,
   "cat": "binocular",
   "check": "実機で見え方を確認"
  },
  {
   "id": "B17",
   "brand": "Kenko",
   "name": "VC Smart 防振双眼鏡（型番未記載）",
   "model": "",
   "price": "過去カード39,390円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：単体・人物の着用／使用例とも未取得。下記の参照ページをご確認ください。",
    "候補（2026-09-19 公式確認）：VC スマート 10×30（JAN 4961607031940）。生産終了、公式の希望小売価格は82,000円（税別）。39,390円は中古品にも見られる販売価格で、新品で買える価格とは限らない。B16 とは別機種。元の商品カードと同一かは未確認。"
   ],
   "features": "具体的な倍率・型番が不明なカード掲載。",
   "reason": "比較履歴として保存。",
   "caution": "B16や別モデルと同一と断定できない。",
   "use": [
    "ライブ",
    "観劇",
    "旅行"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.kenko-tokina.co.jp/"
    },
    {
     "label": "候補 VC スマート 10×30（公式）",
     "url": "https://www.kenko-tokina.co.jp/optics/binoculars/vc/4961607031940.html"
    }
   ],
   "images": {},
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "binocular",
   "check": "同じ機種か確認"
  },
  {
   "id": "L01",
   "brand": "Loop",
   "name": "Experience 2",
   "model": "",
   "price": "4,990円→5,290円と記載",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はブラック（色違いあり・価格は同じ）"
   ],
   "features": "ライブ用イヤープラグ。SNR17dB、チップ4サイズと紹介。",
   "reason": "大音量を和らげる携帯小物。",
   "caution": "イヤホンではなく耳栓。表示遮音値が全員の実効減音を保証するわけではない。",
   "use": [
    "ライブ"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.loopearplugs.jp/products/experience"
    }
   ],
   "images": {
    "item": "images/products/L01_item.jpg",
    "wear": "images/products/L01_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "live",
   "photoExtra": true,
   "check": "耳栓（イヤホンではない）"
  },
  {
   "id": "L02",
   "brand": "Loop",
   "name": "Experience 2 Plus",
   "model": "",
   "price": "6,890円",
   "priceNote": "今回取得した公式ページの掲載値（2026-09-17閲覧）",
   "notes": [
    "公式掲載の装着例。医療的効果や個人のフィットを保証する写真ではない。"
   ],
   "features": "Experience 2にフォームチップ・Mute等を加えたセット。",
   "reason": "装着感を選びやすい旧推奨セット。",
   "caution": "耳栓のフィット・音の感じ方には個人差。単独では主役感が弱い。",
   "use": [
    "ライブ"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.loopearplugs.jp/products/experience-plus"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://www.loopearplugs.jp/products/experience-plus"
    }
   ],
   "images": {
    "item": "images/products/L02_item.jpg",
    "wear": "images/products/L02_wear.jpg"
   },
   "wearLabel": "着用参考（別色）",
   "hasWearPhoto": true,
   "cat": "live",
   "check": "フィットを確認"
  },
  {
   "id": "F01",
   "brand": "HANA / BMSG",
   "name": "YURI ペンライトチャーム",
   "model": "Born to Bloom ペンライトチャーム",
   "price": "2,000円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はHANA公式サイトのグッズ告知画像から切り出し（販売ページは終了）"
   ],
   "features": "YURIを選べるチャーム。",
   "reason": "ペンライトやバッグに添える。",
   "caution": "公式グッズは一通り所有と思われるため見送り。過去の受注期限・発送予定は現在情報として再利用しない。",
   "use": [
    "ライブ",
    "推し活"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://bmsg.shop/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://hana.b-rave.tokyo/goods/260601/"
    }
   ],
   "images": {
    "item": "images/products/F01_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "official",
   "photoExtra": true,
   "check": "所有状況を確認"
  },
  {
   "id": "F02",
   "brand": "HANA / BMSG",
   "name": "YURI ティッシュボックスケース",
   "model": "HANA MEMBERS COLLECTION Tissue Box Case by YURI",
   "price": "5,500円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "合成皮革とステンレス蓋と紹介。",
   "reason": "自宅の実用品に推し要素。",
   "caution": "公式グッズは一通り所有と思われるため見送り。過去の受注期限・発送予定は現在情報として再利用しない。",
   "use": [
    "ライブ",
    "推し活"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://bmsg.shop/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://bmsg.shop/products/hana-members-collection-tissue-box-case-by-yuri"
    }
   ],
   "images": {
    "item": "images/products/F02_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "official",
   "photoExtra": true,
   "check": "所有状況を確認"
  },
  {
   "id": "F03",
   "brand": "HANA / BMSG",
   "name": "HANA公式ペンライト",
   "model": "HANA OFFICIAL LIGHT STICK",
   "price": "6,000円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はHANA公式サイトの告知画像（イメージ）"
   ],
   "features": "赤色点灯・点滅、単4×3本と紹介。",
   "reason": "未所有ならライブで使う。",
   "caution": "公式グッズは一通り所有と思われるため見送り。過去の受注期限・発送予定は現在情報として再利用しない。",
   "use": [
    "ライブ",
    "推し活"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://bmsg.shop/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://hana.b-rave.tokyo/goods/260130-2/"
    }
   ],
   "images": {
    "item": "images/products/F03_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "official",
   "photoExtra": true,
   "check": "所有状況を確認"
  },
  {
   "id": "F04",
   "brand": "HANA / BMSG",
   "name": "HANA ペンライトバッグ",
   "model": "HANA ペンライトバッグ",
   "price": "3,800円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はHANA公式サイトのグッズ告知画像から切り出し（販売ページは終了）"
   ],
   "features": "巾着・ショルダー付きと紹介。",
   "reason": "ペンライトの携帯に。",
   "caution": "公式グッズは一通り所有と思われるため見送り。過去の受注期限・発送予定は現在情報として再利用しない。",
   "use": [
    "ライブ",
    "推し活"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://bmsg.shop/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://hana.b-rave.tokyo/goods/260601/"
    }
   ],
   "images": {
    "item": "images/products/F04_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "official",
   "photoExtra": true,
   "check": "所有状況を確認"
  },
  {
   "id": "F05",
   "brand": "HANA / BMSG",
   "name": "Born to Bloom カードケース",
   "model": "Born to Bloom カードケース",
   "price": "2,200円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はHANA公式サイトのグッズ告知画像から切り出し（販売ページは終了）"
   ],
   "features": "トレカを入れる小物。",
   "reason": "YURIのカードを既に持つ場合。",
   "caution": "公式グッズは一通り所有と思われるため見送り。過去の受注期限・発送予定は現在情報として再利用しない。",
   "use": [
    "ライブ",
    "推し活"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://bmsg.shop/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://hana.b-rave.tokyo/goods/260601/"
    }
   ],
   "images": {
    "item": "images/products/F05_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "official",
   "photoExtra": true,
   "check": "所有状況を確認"
  },
  {
   "id": "F06",
   "brand": "HANA / BMSG",
   "name": "ランダムフォトカード",
   "model": "HANA ランダムフォトカード",
   "price": "500円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はHANA公式サイトのグッズ告知画像から切り出し（販売ページは終了）"
   ],
   "features": "メンバーがランダムの商品。",
   "reason": "小さなおまけの旧候補。",
   "caution": "公式グッズは一通り所有と思われるため見送り。過去の受注期限・発送予定は現在情報として再利用しない。",
   "use": [
    "ライブ",
    "推し活"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://bmsg.shop/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://hana.b-rave.tokyo/goods/260601/"
    }
   ],
   "images": {
    "item": "images/products/F06_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "official",
   "photoExtra": true,
   "check": "所有状況を確認"
  },
  {
   "id": "F07",
   "brand": "Harper’s BAZAAR",
   "name": "2026年9月号（YURI表紙と紹介）",
   "model": "",
   "price": "800円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "過去回答で2026年7月発売・YURI表紙と紹介。",
   "reason": "雑誌を持っていなければ添え物。",
   "caution": "今回、号・表紙・発売日の一次情報を再確認できていない。現物の取り違え防止のため写真は掲載しない。",
   "use": [
    "読書",
    "推し活"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.harpersbazaar.com/jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://prtimes.jp/main/html/rd/p/000000905.000008128.html"
    }
   ],
   "images": {
    "item": "images/products/F07_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "official",
   "photoExtra": true,
   "itemLabel": "表紙",
   "check": "号・発売日を確認"
  },
  {
   "id": "D01",
   "brand": "Bose",
   "name": "SoundLink Flex 第2世代",
   "model": "",
   "price": "19,800円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真はデュードロップミント（色違いあり）"
   ],
   "features": "Bluetoothスピーカー。IP67・最大12時間と紹介。",
   "reason": "HANAを自宅で楽しむ。",
   "caution": "良いスピーカーを既に所有する場合は重複。",
   "use": [
    "自宅",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.bose.co.jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.bose.co.jp/p/speakers/bose-soundlink-flex-portable-speaker-2nd-gen/SLFLXII-SPEAKERWIRELESS.html"
    }
   ],
   "images": {
    "item": "images/products/D01_item.jpg",
    "wear": "images/products/D01_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "daily",
   "photoExtra": true,
   "check": "手持ちと重なりを確認"
  },
  {
   "id": "D02",
   "brand": "Canon",
   "name": "SELPHY QX20",
   "model": "",
   "price": "22,000円",
   "priceNote": "今回取得した公式ページの掲載値（2026-09-17閲覧）",
   "notes": [
    "人が手に持つ公式使用例。装着する商品ではない。"
   ],
   "features": "スマホ写真用プリンター。カード／スクエア、シール紙。",
   "reason": "旅やライブの写真を残す。",
   "caution": "写真を印刷する習慣が必要。消耗品代は別。",
   "use": [
    "自宅",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://personal.canon.jp/product/printer/miniphotoprinter/lineup/qx20"
    },
    {
     "label": "写真出典（商品ギャラリー）",
     "url": "https://personal.canon.jp/product/printer/miniphotoprinter/lineup/qx20"
    }
   ],
   "images": {
    "item": "images/products/D02_item.jpg",
    "wear": "images/products/D02_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "daily",
   "check": "印刷する習慣を確認"
  },
  {
   "id": "D03",
   "brand": "ワコール 睡眠科学",
   "name": "シルク100％パジャマ",
   "model": "",
   "price": "38,500円〜",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）。写真は公式ページの初期表示の色（色違いあり）"
   ],
   "features": "シルク製の上下セットとして紹介。",
   "reason": "上質なナイトウェアを本人が好む場合。",
   "caution": "品番・サイズが未記載。洗濯条件・素材の好み確認。",
   "use": [
    "自宅",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://store.wacoal.jp/disp/001400172950009/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://store.wacoal.jp/disp/01_YDX542.html"
    }
   ],
   "images": {
    "item": "images/products/D03_item.jpg",
    "wear": "images/products/D03_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "daily",
   "photoExtra": true,
   "check": "品番・サイズを確認"
  },
  {
   "id": "D04",
   "brand": "MYTREX",
   "name": "REBIVE MINI XS2",
   "model": "",
   "price": "14,960円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "コンパクトなハンディガン。",
   "reason": "短時間のボディケア用品。",
   "caution": "使用禁忌・部位は取扱説明書優先。医療的な効果を約束しない。",
   "use": [
    "自宅",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://mytrex.jp/rebive-mini-xs2/"
    }
   ],
   "images": {
    "item": "images/products/D04_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "daily",
   "photoExtra": true,
   "check": "使用上の注意を確認"
  },
  {
   "id": "D05",
   "brand": "MYTREX",
   "name": "背中用アーム（XS2用として紹介）",
   "model": "",
   "price": "3,960円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "本体の届きにくい場所用の追加パーツ。",
   "reason": "D04と一緒に使用する旧セット案。",
   "caution": "適合機種・SKUを再確認。単体ではプレゼントとして完結しない。",
   "use": [
    "自宅",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://mytrex.jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://mytrex.jp/rebive-mini-xs2/"
    }
   ],
   "images": {
    "item": "images/products/D05_item.jpg",
    "wear": "images/products/D05_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "daily",
   "photoExtra": true,
   "check": "適合機種を確認"
  },
  {
   "id": "D06",
   "brand": "Amazon",
   "name": "Kindle Paperwhite",
   "model": "",
   "price": "約28,000円〜",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "7インチ・防水モデルとして紹介。",
   "reason": "小説等の電子書籍を読む習慣がある場合。",
   "caution": "世代・容量がスレッド未特定。医学書・カラー資料の主用途には別検討。",
   "use": [
    "自宅",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.amazon.co.jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://www.amazon.co.jp/dp/B0CFPL6CFY"
    }
   ],
   "images": {
    "item": "images/products/D06_item.jpg",
    "wear": "images/products/D06_wear.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "daily",
   "photoExtra": true,
   "check": "世代・容量を確認"
  },
  {
   "id": "D07",
   "brand": "JOGGO",
   "name": "カスタム革小物",
   "model": "",
   "price": "1万〜3万円の企画目安",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "色を選べるキーケース・カードケース等の提案。",
   "reason": "ブランド名より色・仕様を本人に合わせる。",
   "caution": "具体的な商品は未決定。全ての革小物が同価格帯という意味ではない。",
   "use": [
    "自宅",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://joggo.jp/"
    },
    {
     "label": "写真出典（公式商品ページ）",
     "url": "https://joggo.jp/products/detail/JW42104013/"
    }
   ],
   "images": {
    "item": "images/products/D07_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "daily",
   "photoExtra": true,
   "itemLabel": "作例：2つ折りミニ財布（色の組み合わせは自由）",
   "check": "贈る品を決める必要あり"
  },
  {
   "id": "E01",
   "brand": "MEGURI SPA & WELLNESS",
   "name": "フェイシャル60分 ギフト券",
   "model": "",
   "price": "29,900円",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "インターコンチネンタルホテル大阪。",
   "reason": "物を増やさず休息の時間を贈る。",
   "caution": "施術の好みと予約・有効期限の確認が必要。",
   "use": [
    "体験",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://icosaka.com/offer/spa_voucher/"
    }
   ],
   "images": {
    "item": "images/products/E01_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "experience",
   "photoExtra": true,
   "itemLabel": "ギフト券",
   "check": "予約・有効期限を確認"
  },
  {
   "id": "E03",
   "brand": "HUGONIST",
   "name": "オリジナル香水づくり体験",
   "model": "",
   "price": "2人1万〜2万円の企画目安",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "大阪・北堀江の体験候補。",
   "reason": "本人が香りを選び、体験を残す。",
   "caution": "これは確定料金ではない。香りを使わない人には不向き。",
   "use": [
    "体験",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://hugonist.com/"
    }
   ],
   "images": {
    "item": "images/products/E03_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "experience",
   "photoExtra": true,
   "itemLabel": "選べる香水ボトル",
   "check": "料金を確認"
  },
  {
   "id": "E04",
   "brand": "ゆう工房",
   "name": "陶芸・ガラス等の制作体験",
   "model": "",
   "price": "2人1万〜2万円の企画目安",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "マグカップ・小皿・花器などを作る案。",
   "reason": "一緒に作る過程と作品を贈る。",
   "caution": "具体的コース未決定。焼成後の受け取り条件等を確認。",
   "use": [
    "体験",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://yukobo.co.jp/day.html"
    }
   ],
   "images": {
    "item": "images/products/E04_item.jpg"
   },
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "experience",
   "photoExtra": true,
   "itemLabel": "陶芸体験で作った器",
   "check": "コースを確認"
  },
  {
   "id": "E05",
   "brand": "SOW EXPERIENCE",
   "name": "FOR2 体験ギフト",
   "model": "",
   "price": "9,570〜57,750円と紹介",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "食事・制作・アウトドア等を選ぶカタログ。",
   "reason": "日程・内容を相手と選べる。",
   "caution": "シリーズ内で券種未決定。対象地域・有効期限を確認。",
   "use": [
    "体験",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://www.sowxp.co.jp/series/2"
    }
   ],
   "images": {
    "item": "images/products/E05_item.jpg",
    "wear": "images/products/E05_wear.jpg"
   },
   "wearLabel": "2人で体験する様子（機織り）",
   "hasWearPhoto": true,
   "cat": "experience",
   "photoExtra": true,
   "itemLabel": "FOR2ギフトのパッケージ",
   "check": "券種・有効期限を確認"
  },
  {
   "id": "E06",
   "brand": "HanaPrime",
   "name": "花の定期便",
   "model": "",
   "price": "スレッドに具体額なし",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：docx 作成後に公式ページから追加取得（2026-09-19）"
   ],
   "features": "定期配送の花を贈る案。",
   "reason": "花が好きで管理を楽しめる場合。",
   "caution": "多忙な人に手入れ・受取の負担を増やす可能性。",
   "use": [
    "体験",
    "休日"
   ],
   "links": [
    {
     "label": "公式・参照ページ",
     "url": "https://hanaprime.jp/subscription"
    }
   ],
   "images": {
    "item": "images/products/E06_item.jpg",
    "wear": "images/products/E06_wear.jpg"
   },
   "wearLabel": "届いた花を飾った様子",
   "hasWearPhoto": true,
   "cat": "experience",
   "photoExtra": true,
   "itemLabel": "定期便の花",
   "check": "受け取りの負担を確認"
  },
  {
   "id": "E07",
   "brand": "伊勢志摩旅行",
   "name": "旅行を誕生日仕様にする案",
   "model": "",
   "price": "追加の費用は未確定",
   "priceNote": "スレッド記載価格／最新価格は未照合",
   "notes": [
    "写真：特定プランの写真は未取得。装着写真は対象外。会場・提供内容は参照先で確認。"
   ],
   "features": "宿・食事・花・ケーキ・手紙を組み合わせる。",
   "reason": "物ではなく二人の時間を贈る。",
   "caution": "予約やホテル対応は未確認。確定商品ではない。",
   "use": [
    "体験",
    "休日"
   ],
   "links": [],
   "images": {},
   "wearLabel": "",
   "hasWearPhoto": true,
   "cat": "experience",
   "check": "予約・対応を確認"
  }
 ],
 "binocularCompare": [
  [
   "重点比較",
   "アトレックII 8×32",
   "ウルトラビュー8×32",
   "SW 10×25"
  ],
  [
   "ID",
   "B04",
   "B08",
   "B13"
  ],
  [
   "倍率／重さ",
   "8倍／390g",
   "8倍／375g",
   "10倍／333g"
  ],
  [
   "実視界",
   "7.5°",
   "8.3°",
   "7.5°"
  ],
  [
   "ひとみ径",
   "4.0mm",
   "4.0mm",
   "2.5mm"
  ],
  [
   "過去の評価軸",
   "価格と明るさ",
   "広視界と明るさ",
   "拡大と携帯性"
  ]
 ],
 "appendix": [
  {
   "label": "APPENDIX A  /  品名の出たアイデアも保存",
   "title": "型番が決まっていない候補・補助品",
   "paras": [
    "以下はスレッドに登場したものの、特定の商品まで絞られていない案です。このカタログに含めたブランド・シリーズと一部重複します。単体の公式商品写真を特定できないため、イメージ写真は付けていません。",
    "花束・小ぶりな花束",
    "3,000〜8,000円程度の案。メインに添える。香りや持ち帰りやすさ、管理の負担を確認。",
    "作家物の花器・一輪挿し・小型花器",
    "8,000〜20,000円程度の案。花との組み合わせは10,000〜30,000円程度。作家・作品は未定。",
    "綿／ガーゼの上質パジャマ",
    "15,000〜20,000円程度の案。シルクより手入れのしやすさを重視する案。ブランド・サイズ未定。",
    "シルクアイマスク・睡眠セット",
    "アイマスク5,000〜10,000円程度の案。ナイトウェアとの組み合わせ。製品・素材の詳細は未定。",
    "フォトプリンター用紙・インク／小型アルバム",
    "未設定。QX20に添える消耗品とミニアルバム。適合型番、必要枚数は未指定。",
    "旅行用ジュエリーケース／アクセサリーケース",
    "10,000〜30,000円の革小物案の一部。手持ちジュエリーを持ち運ぶ脇役。収納形状や用途を確認。",
    "キーケース・名刺／カードケース・パスポートケース・ミニ財布・ポーチ",
    "カスタム革小物全体で10,000〜30,000円程度。JOGGO等のオーダー案。フルネームや記念日刻印は本人の好みを確認。",
    "陶芸：マグカップ・小皿・ペアグラス・花器／ガラスアクセサリー",
    "体験2人分で10,000〜20,000円程度の案。完成品の購入ではなく制作体験として登場。講座・作品は未定。",
    "ライブ用バッグ・ケース・モバイルバッテリー・遠征用品",
    "未設定。品名だけの方向性。双眼鏡ストラップ、収納ポーチ等は本体付属品と重複に注意。",
    "インナーイヤホン・上質なイヤホン",
    "未設定。機種は提案されていない。Loopは再生機能のあるイヤホンではない。",
    "ケーキ・誕生日ディナー・手書きカード・ミニアルバム",
    "食事10,000〜20,000円等の案。物に添える演出。店・花店・ケーキの予約は確定していない。",
    "高級ボールペン・聴診器・仕事用IDケース",
    "未設定／当時は優先度低め。誕生日まで仕事を連想させる可能性を検討。具体的モデルはなし。",
    "美容家電・スキンケア・ブランド財布／バッグ",
    "未設定／当時は優先度低め。本人のこだわりを外す懸念。一般論であり、職業だけで好みを断定しない。",
    "リング・ブレスレット・ハート／花のモチーフ",
    "未設定／当時は条件付き。サイズ、意味合い、好みの確認が必要。具体的モデルは別途カードに掲載。"
   ]
  },
  {
   "label": "APPENDIX B",
   "title": "ブランドの見方と、参考として出た品名",
   "paras": [
    "ALEXANDRE DE PARIS",
    "ヘアアクセサリー専門の高級ブランドとして検討。樹脂系と布系で製造・手入れ条件が異なる。",
    "ブランド参照先",
    "ACCA",
    "職人によるヘアアクセサリー作りを軸に比較。留まりやすさは髪質と個々の製品で確認する。",
    "ブランド参照先",
    "colette malouf",
    "髪飾りの造形・デザインを選ぶ理由にする方向。今回の黒いポニーカフもここに該当。",
    "ブランド参照先",
    "THBT／LETICIA",
    "甘さを抑えた形や色で選ぶ方向。",
    "ブランド参照先",
    "France Luxe",
    "日常のまとめ髪を上質にする比較先。個々のクリップの大きさと髪量への適合が大切。",
    "ブランド参照先",
    "Complex Biz",
    "ヘアアクセサリーの競合として名前が登場。具体的商品名は決まっていない。",
    "ブランド参照先",
    "Jennifer Behr",
    "華やかなヘッドピースや特別な日の候補として登場。具体的商品名は決まっていない。",
    "ブランド参照先",
    "Hirotaka／TOM WOOD／Georg Jensen",
    "主役のジュエリーと比べるのではなく、形や用途の違うイヤーカフ／ブローチを足す方向。",
    "ブランド参照先",
    "Hermès",
    "スカーフ関連は既存の小物の使い方を広げる案。",
    "ブランド参照先",
    "Vendome Aoyama／va／Vendome Boutique",
    "別ブランドとして区別。",
    "ブランド参照先"
   ]
  },
  {
   "label": "APPENDIX C",
   "title": "組み合わせ案と、次に確認すること",
   "paras": [
    "以下は当時の組み合わせを再掲した記録です。現在この総額で購入できることを保証するものではなく、現方針で推奨するセットでもありません。",
    "コンパクト推し活フルセット　27,590円＋送料",
    "アリーナH＋10×21（13,200）＋Loop Plus（6,890）＋YURIチャーム（2,000）＋ティッシュケース（5,500）。",
    "大人のプレミアム推し活セット　44,090円",
    "アトレックII10×32（35,200）＋Loop Plus（6,890）＋YURIチャーム（2,000）。",
    "公式ライブセット　31,890円＋送料",
    "アリーナH＋（13,200）＋Loop Plus（6,890）＋ペンライト（6,000）＋バッグ（3,800）＋チャーム（2,000）。",
    "アレクサンドルの使い分け2点　34,100円",
    "APY-78（15,400）＋BASIC CLASSIQUES M（18,700）。両方使う習慣がある場合のみ。",
    "エルメスのスカーフ＋リング　72,600円",
    "ツイリー（40,700）＋ミニ・モール（31,900）。",
    "ライブ用品＋食事／花　総額25,000〜50,000円程度の複数案",
    "時点により耳栓が通常版／Plus、双眼鏡が8倍／10倍と変わるため、総額は統合していない。",
    "スパ＋YURI小物＋花　約34,000〜40,000円の案",
    "フェイシャル60分29,900円を軸にした当初案。施術内容と好みの確認が必要。",
    "購入前チェック",
    "適合  髪量・髪の長さ・普段の留め方／金属アレルギー／耳の形／ピアス穴を確認。分からない情報を推測で埋めない。",
    "運用  院内ルール、手術帽との干渉、洗濯や清拭の可否、装飾の引っ掛かりを確認。",
    "購入  税込価格と送料・包装、色・型番・数量、公式／正規販売店、修理窓口、納期を確認。"
   ]
  },
  {
   "label": "APPENDIX D",
   "title": "写真・情報の確認状況",
   "paras": [
    "収録商品・シリーズ・体験：69項目。docx 作成時点で単体写真を収録したものは29商品、人物の着用・使用例を収録したものは16商品です。ほかに単体写真を持つ商品でも、人物写真は未取得のものがあります。",
    "写真を2種類とも収録した商品",
    "H01、H02、H03、H04、H05、H06、H10、H11、H12、J02、J03、J13、J15、L02、D02",
    "単体写真のみ収録した商品",
    "H07、H08、H09、H13、H14、B01、B03、B04、B05、B12、B13",
    "未取得・未特定・装着対象外",
    "H15、H16、J01、J05、J08、J10、J16、B02、B06、B07、B08、B09、B10、B17、L01、F01、F02、F03、F04、F05、F06、F07、D01、D03、D04、D05、D06、D07、E01、E03、E04、E05、E06、E07",
    "上記の写真未取得は、商品・サービスそのものの評価ではありません。商品ページへのアクセス制約や、型番が特定できない提案などを含みます。未取得の箇所を生成画像や別製品の写真で埋めてはいません。",
    "過去の提案と、今回の確認を分けた主な箇所",
    "J02：スレッド39,600円に対し、今回取得した国内公式ページは36,300円。J10：型番761825は今回取得33,000円。旧カード38,500円との同一性は未確定。J13：本文29,700円と旧カード57,200円に食い違い。今回取得した7月ユリは29,700円。B04：メーカー希望34,100円に対し、公式店の取得表示は33,000円。旧実売価格とは分離。F07：YURI表紙とした雑誌の号・価格は、今回の独立した確認ができていません。",
    "出典・画像について",
    "商品説明の基礎はこのスレッドです。今回取得した公式情報を補足した箇所は、カードの確認状況欄に明示しました。各カードの「公式・参照ページ」「写真出典」をクリックすると参照先に移動できます。人物写真は商品の大きさや着用の雰囲気を見る目的で掲載し、人物の身元は取り扱っていません。",
    "写真の権利は各ブランド・撮影者・販売者等に帰属します。本資料は個人的な購入比較用として作成しています。公開・再配布・販売資料への転用時は、写真の利用条件や権利者の許諾を別途確認してください。"
   ]
  }
 ],
 "budget": {
  "limit": 40000,
  "excluded": [
   {
    "id": "J04",
    "name": "OFFSPRING ブローチ S",
    "price": "46,200円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "J06",
    "name": "ツイリー《ブックル・エ・マイヨン》",
    "price": "40,700円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "J07",
    "name": "一粒ダイヤモンド ネックレス",
    "price": "41,800円",
    "docxItem": true,
    "docxWear": true
   },
   {
    "id": "J09",
    "name": "ダイヤモンドネックレス（カード掲載）",
    "price": "46,200円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "J11",
    "name": "K10MPG ブリリアント ダイヤモンド ネックレス",
    "price": "48,400円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "J12",
    "name": "［シェア］K10YG ダイヤモンド シューティングスター ネックレス",
    "price": "41,800円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "J14",
    "name": "K18YG ダイヤモンドネックレス",
    "price": "50,000円",
    "docxItem": true,
    "docxWear": false
   },
   {
    "id": "J17",
    "name": "K10 ネックレス（51,700円掲載）",
    "price": "51,700円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "J18",
    "name": "K10 ネックレス（58,300円掲載）",
    "price": "58,300円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "B11",
    "name": "MONARCH M7 10×30",
    "price": "52,800円（過去実売約4.5〜5.3万円）",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "B14",
    "name": "ATERA II H10×21",
    "price": "94,600円",
    "docxItem": true,
    "docxWear": false
   },
   {
    "id": "B15",
    "name": "10×30 IS II",
    "price": "過去カード105,050円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "B16",
    "name": "VCスマートコンパクト 8×21",
    "price": "過去カード54,500円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "B18",
    "name": "FESTA 12×21 STABI III",
    "price": "過去実売約6.5〜7万円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "B19",
    "name": "STABILIZED 10×25 S",
    "price": "91,300円",
    "docxItem": false,
    "docxWear": false
   },
   {
    "id": "E02",
    "name": "ボディ90分 ギフト券",
    "price": "41,400円",
    "docxItem": false,
    "docxWear": false
   }
  ]
 },
 "rankings": [
  {
   "cat": "hair",
   "decided": "2026-09-20"
  },
  {
   "cat": "jewelry",
   "decided": "2026-09-20"
  }
 ]
};
