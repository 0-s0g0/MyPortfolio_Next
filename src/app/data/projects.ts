import { StaticImageData } from "next/image";
import product1img from "./../Public/images/tamalog.png";
import product2img from "./../Public/images/shikaku.png";
import product3img from "./../Public/images/ThanksLink.png";
import product4img from "./../Public/images/Portfolio.png";
import product5img from "./../Public/images/Dream.png";
import product6img from "./../Public/images/Tekuteku.png";
import product7img from "./../Public/images/APU.jpg";
import product8img from "./../Public/images/stepbycode.png";

export interface Project {
    id: number;
    title: string;
    description: string;
    description2: string;
    image:StaticImageData;
    tags: string[];
    awardTitle:string;
    background: string;
    purpose: string;
    function: string;
    number:string;
    role: string;
    prezentation:string;
    technologies: string[];
    duration: string;
    webURL: string;
    github: string;
    outname:string;
    outlink?: string;  // 外部リンクはオプショナルにする
    
  }

  export const projects: Project[] = [
  {
    id: 1,
    title: "たまLog",
    description: "結果用紙の写真をアップロードするだけ！",
    description2: "かわいく楽ちん体組成計管理アプリ",
    image: product1img,
    tags: ["Web App", "Individual Project","Award"],
    technologies: ["Next.js/TS", "JavaScript", "CSS", "Python/Flask"],
    awardTitle: "KCL☆Hack (2024/11) 金賞",
    github: "https://github.com/0-s0g0/KCLHack",
    background :"痩せたいけど、毎回手入力するのはめんどくさい。  \n大学にある体組成計の記録用紙を自動入力かつキャラクター要素で継続を！",
    purpose:"webアプリを初めて作ってみる。画像処理を取り入れてみたい。  \n大学にある体組成計の記録用紙をデジタル化してみる",
    function:"(1) 記録用紙の画像から数値の取得(画像処理 : 二値化→領域検出→k-nn最近傍法)  \n(2) 得られた数値を可視化(目標との差分値の表示、現在の体組成割合を円グラフで)  \n(3) 過去の履歴の表示(データ項目ごとの折れ線グラフ、データの一覧)  \n(4) カレンダーをもちいた運動の記録  \n(5) 豆知識表示  \n(6) 入力回数によるキャラクターの成長  \n(7) ログイン/サインイン",
    number:'1名',
    role: "すべて",
    prezentation:'KCL☆Hack (2024.11.17)学内',
    duration: "(webアプリの仕組みなどの勉強) 3か月  \n(デザイン・コーディング) 2か月",
    outname:'none',
    outlink:'none',
    webURL: "https://tamalog.vercel.app/",
},
{
    id: 2,
    title: "市か区",
    description: "わたしが!?「市か区」の観光大臣！",
    description2: "写真を撮ってポスターを作っちゃおう！",
    image: product2img,
    tags: ["Web App", "Team Project","Award"],
    technologies: ["Next.js/TS", "WebRTC", "CSS", "Python/Flask"],
    awardTitle: "ハックツハッカソン(2024/12)企業賞",
    github: "https://github.com/jangwoung/GAKUSAI-AnkyloCup",
    background :"ハッカソンお題「しかく」から「市か区」を連想。観光と言ったら写真！  \nその写真を活用して観光大臣になり旅をより一層楽しめるようにしたい！",
    purpose:"はじめてのチーム開発。深層学習を取り入れてみたい!  \ngeminiApiを使ったAI文章を作成してみたい!",
    function:"(1) Googleアカウントで簡単にログイン/サインアップ  \n(2) スマートフォンのカメラで自撮り写真を撮影📷  \n(3) 撮影した写真から、ランダムであなたを素敵な観光地へ案内してくれます  \n(4) この画像を自由にカスタマイズして、オリジナルの観光ポスターを作成  \n(5) AIがあなたを観光大臣としてポスターと一緒に観光地を宣伝！  \n(6) 実際に観光地に訪れて写真を撮ると、お得な割引券をゲットできるかも!?  \n(7) みんなにポスターを公開して、観光地を盛り上げよう！",
    number:'2名',
    role: "撮影した画像から人物領域のセグメンテーションAPI作成(前処理、人物検出、領域補正)  \nこの人物と背景の合成画像から画像編集機能(画像加工、テキスト、オブジェクトの追加・編集)  \nGeminiAPIプロンプト作成",
    prezentation:'ハックツハッカソン(2024.12.15)  \nProgate賞受賞',
    duration: "10日間",
    outname:"topa'z記事",
    outlink:"https://topaz.dev/projects/3d8247708bf924069bec",
    webURL: 'none',
  },

  {
    id: 3,
    title: "ThanksLink",
    description: "「ありがとう」で繋がる・広がるSNS",
    description2: "この気持ちにまた会おう",
    image: product3img,
    tags: ["Web App", "Team Project","Award"],
    technologies: ["Next.js/TS", "master.js", "CSS","SQL"],
    awardTitle: "技育camp(2025/01)努力賞",
    github: "https://github.com/0-s0g0/thankyou-app",
    background :"「うれしい」を共有したい！この気持ちを忘れたくない！  \nそんな気持ちをいつでもどこでも共有できるアプリを作りたい",
    purpose:"SQLデータベースの勉強がしたい  \n物理演算を用いるフレームワークに挑戦してみたい",
    function:"(1) 「ありがとう」の投稿  \nグループの作成ができ、グループごとに些細なことでも「ありがとう」をつぶやくことができる  \n投稿に対するいいね・コメントができる  \n(2)誕生日のお祝い機能  \nメッセージカードを作成・送信することができる  \n(3)感謝の見える化  \nグループごとの投稿数をボールの大きさで可視化",
    number:'2名',
    role: "POST/reply投稿・作成画面  \n誕生日（受信・送信）画面・メッセージカード作成機能  \nGeminiAPIプロンプト作成  \nmaster.jsによるボールの作成",
    prezentation:'技育camp(2025.1.19)  \n努力賞受賞',
    duration: "7日間",
    outname:"技育プロジェクト : サポーターズ公式Xリンク",
    outlink:"https://x.com/geek_pjt/status/1880902623957827945",
    webURL: 'none',
  },

  {
    id: 4,
    title: "MyPortfolio",
    description: "ポートフォリオサイト",
    description2: "手がけたアイデアが形になった宝物たち。",
    image: product4img,
    awardTitle: "none",
    tags: ["Website", "Individual Project"],
    technologies: ["Next.js/TS", "HTML", "CSS", "jQuery"],
    github: "https://github.com/0-s0g0/MyPortfolio_Next",
    background :"ハッカソンで作った作品をまとめたサイトを作りたい  \nLT等で使うポートフォリオを作りたい！",
    purpose:"初心に戻ってHTMLとCSSのコーディングを丁寧に一からしたい。  \n(追記)CloudFlareに挙げるのでnextで一から書き直した。",
    function:"Productリストとその詳細情報  \n活動履歴の作成  \nnfc表示用のcontactモーダル ",
    number:'1名',
    role: "すべて",
    prezentation:'none',
    duration: "(2025.01.01～Now)",
    outname:"none",
    outlink:"none",
    webURL: 'https://0-s0g0.com/',
  },
  {
    id: 5,
    title: "DreamShere",
    description: "夢を共有する場所へ",
    description2: "学生と企業が夢でつながるマッチングアプリ",
    image: product5img,
    awardTitle: "none",
    tags: ["Web App", "Team Project"],
    technologies: ["Next.js/TS", "CSS", "Go"],
    github: "https://github.com/0-s0g0/DopingRamune",
    background :"AprilDreamに沿った夢の発信を支援サービスがテーマ  \n自分の夢を語れる場所の提供と企業サイドの人材探しの場としても",
    purpose:"初の野良チーム参加！  \n3三日間の超短期期間でのハッカソンのため得意分野での参戦",
    function:"夢ポスター作製  \n画像と熱意をシェア  \nポイント付与制による企業とのマッチング ",
    number:'4名',
    role: "フロントエンド担当  \nフロントレイアウト設定  \n画像編集機能作成  \nフッター/ヘッダー作成  \nマイページ作成",
    prezentation:'PR TIMES HACKATHON 2025 Winter(2025.2.28)',
    duration: "3日間",
    outname:"none",
    outlink:"none",
    webURL: 'none',
  },

  {
    id: 6,
    title: "TEKUTEKU",
    description: "脳細胞のように九工大生と東科大生を繋げる",
    description2: "GYMLABOとTakiPlazaの交流を目指して",
    image: product6img,
    tags: ["Web App", "Team Project","Award"],
    technologies: ["Next.js/TS", "WebRTC", "CSS", "Go", "HCL"],
    awardTitle: "Kyutech×ScienceTokyoハッカソン(2025/03)企業賞",
    github: "https://github.com/0-s0g0/TEKUTEKU",
    background :"東京科学大と九州工業大の交流を促進  \n両大学のワーキングスペースでリアルタイムでの交流を目指す",
    purpose:"野良チーム開発。イメージにそったUIのデザインと実装を  \バックと繋げる工程にチャレンジしたい",
    function:"(1) 自分のスマホからコメントを投稿 \n(2) 各キャンパスのモニターにそれぞれの想いを表示  \n(3) それぞれの想いに対する返信やいいね  \n(4) いいね数や返信、時間による情報を円の数や大きさで表現",
    number:'4名',
    role: "フロントエンド担当  \nフロントレイアウト設定  \モニター側UI  \nアニメーション作成",
    prezentation:'Kyutech×ScienceTokyoハッカソン(2025.03.07)  \nProgate賞受賞',
    duration: "3日間",
    outname:"topa'z記事",
    outlink:"https://topaz.dev/projects/9b22d2a5cfb1ee935405",
    webURL: 'none',
  },

  {
    id: 7,
    title: "Nonverbal",
    description: "イラストで繋がるパズルゲーム",
    description2: "見て！描いて！そろえて！あてる！楽しさを",
    image: product7img,
    tags: ["Web App", "Team Project","Award"],
    technologies: ["Bolt.diy", "Next.js/TS"],
    awardTitle: "APU×九工大ミニハッカソン(2025/03)金賞",
    github: "https://github.com/0-s0g0/APUminiHack",
    background :"交流に関連したアプリを生成AI[bolt.diy]を使って生成  \ninputを'言葉'ではなく'絵'で挑戦",
    purpose:"アイデア勝負。プロンプト作成と発表方法の工夫を",
    function:"(1) 与えられたテーマにそってイラストを描く  \n(2) 描き終わると3×3のランダムパズルへ変換  \n(3) 解答者はパズルを解きながらテーマを推察  \n(4) 予想テーマと実際のテーマの一致度を表示",
    number:'4名',
    role: "プロンプト作成",
    prezentation:'APU×九工大ミニハッカソン(2025.03.10)  \n金賞受賞',
    duration: "2時間",
    outname:"none",
    outlink:"none",
    webURL: 'none',
  },

  {
    id: 8,
    title: "StepByCodeHP",
    description: "北九州のITコミュニティHP",
    description2: "運営メンバーで作成！",
    image: product8img,
    tags: ["Website", "Team Project"],
    technologies: ["cloudflare", "Next.js/TS","CSS"],
    awardTitle: "none",
    github: "https://github.com/StepByCode/HP",
    background :"現在運営中のITコミュニティのHPをデザイン&コーディング  \n運営メンバーでインフラ・別ページ作成などで分担を",
    purpose:"フルレスポンシブ対応をさせたい、活動中なのが分かるようにブログ形式にしたい",
    function:"(1) メインでアニメーションの配置  \n(2) ブログをSNSで作成した画像を使う  \n(3) 各記事をモーダルで表示  \n(4) 記事のタグごとの検索",
    number:'3名',
    role: "メインPage/BlogPageのデザイン&コーディング",
    prezentation:'none',
    duration: "2025/3/17～随時変更中",
    outname:"none",
    outlink:"none",
    webURL: 'https://stepbycode.work/',
  },



];
