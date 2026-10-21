
export interface TimelineItem {
  id: string
  icon:
    | "MonitorSmartphone"
    | "code"
    | "building"
    | "star"
    | "MonitorCheck"
    | "award"
  date: string // MM format
  title: string
  description?: string
  location?: string
  url?: string
}

export interface TimelineYear {
  year: number
  items: TimelineItem[]
}

export const timelineData: TimelineYear[] = [
  {
    year: 2026,
    items: [
      {
        id: "2026-11",
        icon: "MonitorCheck",
        date: "10",
        title: "国際学会 ICBSP 2026 研究発表",
        description:
          "発表研究：Respiratory Sound Classification",
        location: "韓国/水原",
      },
      {
        id: "2026-10",
        icon: "MonitorCheck",
        date: "10",
        title: "Medical Japan Tokyo 2026 出展・ピッチ登壇",
        description: "出展プロダクト：BreathVizAI",
        location: "幕張メッセ/千葉",
        url: "https://biz.q-pass.jp/f/12094/medical_t_seminar26/seminar_register",
      },
      {
        id: "2026-09",
        icon: "award",
        date: "09",
        title: "第7回九工大起業家コンテスト 最優秀賞受賞",
        description: "受賞プロダクト：BreathVizAI",
        location: "九州工業大学/福岡",
        url: "https://www.kyutech.ac.jp/whats-new/topics/entry-12411.html",
      },
      {
        id: "2026-08",
        icon: "MonitorCheck",
        date: "09",
        title: "F★Pitch 登壇",
        description: "発表プロダクト：BreathVizAI",
        location: "福岡",
        url: "https://gcfukuoka.com/report/3574",
      },
      {
        id: "2026-07",
        icon: "MonitorCheck",
        date: "09",
        title: "電子情報通信学会 MI研究会 研究発表",
        description: "発表研究：呼吸音解析",
      },
      {
        id: "2026-06",
        icon: "MonitorCheck",
        date: "07",
        title: "藤田医科大学 AI×MedTech 国際ブートキャンプ参加",
        description:
          "医療課題の発見・AIプロトタイプ開発・最終ピッチ",
        location: "藤田医科大学・STATION Ai/愛知",
        url: "https://www.fujita-hu.ac.jp/~intl/jp/latest/bootcamp2026/index.html",
      },
      {
        id: "2026-05",
        icon: "star",
        date: "04",
        title: "NEDO NEP 新星コース採択",
        description: "新星起業家候補生として採択",
        url: "https://nep-shinsei.tayo.jp/",
      },
      {
        id: "2026-04",
        icon: "award",
        date: "02",
        title: "福岡県未来ITスタートアップアワード理事長賞受賞",
        description: "受賞プロダクト：BreathVizAI",
        location: "ONE FUKUOKA BLDG./福岡",
        url: "https://www.iizuka.kyutech.ac.jp/news/2026/0218-95453.html",
      },
      {
        id: "2026-03",
        icon: "MonitorSmartphone",
        date: "01",
        title: "BreathVizAIサイト制作",
        description: "HP公開中",
        url: "https://hp.breathvizai.com/",
      },
      {
        id: "2026-02",
        icon: "MonitorCheck",
        date: "01",
        title: "NYCU innoBridge PARKS Taiwan Program参加",
        description: "5days R&D business program & Pitch",
        location: "TaiwanTechArea/台湾",
      },
      {
        id: "2026-01",
        icon: "MonitorCheck",
        date: "01",
        title: "九工大プレGAPファンド事業採択",
        description:
          "事業内容：呼吸器音解析AIプラットフォーム開発",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        id: "2025-23",
        icon: "MonitorCheck",
        date: "12",
        title: "ROCKET PITCH NIGHT FUKUOKA 2025 に登壇",
        description: "発表作品：BreathVizAI",
        url: "https://0-s0g0.com/productpages/13",
        location: "ONE FUKUOKA BLDG./福岡",
      },
      {
        id: "2025-22",
        icon: "MonitorCheck",
        date: "11",
        title: "チャレキャラ2025最終発表参加",
        description: "発表作品：TSUNAGULINK",
        url: "https://0-s0g0.com/productpages/15",
      },
      {
        id: "2025-21",
        icon: "award",
        date: "11",
        title: "技育展2025優勝&ウイングアーク1st賞受賞",
        description: "受賞プロダクト：BreathVizAI",
        url: "https://www.kyutech.ac.jp/whats-new/topics/entry-11868.html",
        location: "TOKYO NODE/東京",
      },
      {
        id: "2025-20",
        icon: "MonitorCheck",
        date: "11",
        title: "国際会議ICCAS2025登壇",
        description: "発表研究：Medical Image Processing",
        location: "韓国/仁川",
      },
      {
        id: "2025-19",
        icon: "award",
        date: "10",
        title:
          "ハックツハッカソン~ウイングアーク1st x ギラヴァンツ北九州編~最優秀賞受賞",
        description: "受賞プロダクト：YellStriker2025",
        url: "https://0-s0g0.com/productpages/14",
      },
      {
        id: "2025-18",
        icon: "award",
        date: "09",
        title: "JunctionXKyutechでSecondPrize賞受賞",
        description: "受賞プロダクト：BreathVizAI",
        url: "https://0-s0g0.com/productpages/13",
      },
      {
        id: "2025-17",
        icon: "building",
        date: "09",
        title: "N様サマーインターン参加",
        description: "5days8人チーム要件定義書類の作成と発表",
      },
      {
        id: "2025-16",
        icon: "award",
        date: "09",
        title: "技育博で株式会社CARTA HOLDINGS賞受賞",
        description: "受賞プロダクト：たまlog",
        url: "https://0-s0g0.com/productpages/1",
        location: "虎ノ門ヒルズステーションタワー/東京",
      },
      {
        id: "2025-15",
        icon: "building",
        date: "09",
        title: "S様サマーインターン参加",
        description: "4days5人チーム開発",
      },
      {
        id: "2025-14",
        icon: "building",
        date: "09",
        title: "Iグループ様サマーインターン参加",
        description: "5days個人開発",
      },
      {
        id: "2025-13",
        icon: "building",
        date: "08",
        title: "株式会社C様サマーインターン「Treasure」参加",
        description: "3weeksフルサイクル開発",
        url: "https://0-s0g0.com/productpages/11",
      },
      {
        id: "2025-12",
        icon: "MonitorSmartphone",
        date: "08",
        title: "一般社団法人TSUNAGU様サイト制作",
        description: "HP公開中",
        url: "https://tsunagu-sep.org/",
      },
      {
        id: "2025-11",
        icon: "building",
        date: "06",
        title: "Rグループ株式会社様インターン参加",
        description: "Ruby on Rails APIバックエンド開発",
      },
      {
        id: "2025-10",
        icon: "MonitorSmartphone",
        date: "06",
        title: "有限会社北九電機様サイト制作",
        description: "HP公開中",
        url: "https://kitakyudenki.vercel.app/",
      },
      {
        id: "2025-09",
        icon: "building",
        date: "06",
        title: "株式会社F様インターン参加",
        description: "最適化アルゴリズムの構築とPoC作成",
      },
      {
        id: "2025-08",
        icon: "award",
        date: "03",
        title: "電子情報通信学会九州支部 成績優秀賞受賞",
        description: "電子情報通信学会九州支部2024年度受賞者一覧",
        url: "https://www.ieice.org/kyushu/siseki2024/",
      },
      {
        id: "2025-07",
        icon: "award",
        date: "03",
        title: "学業成績最優秀賞受賞",
      },
      {
        id: "2025-06",
        icon: "MonitorSmartphone",
        date: "03",
        title: "STEPBYCODEサイト制作",
        description: "HP公開中",
      },
      {
        id: "2025-05",
        icon: "award",
        date: "03",
        title: "APU×Kyutechミニハッカソンで金賞受賞",
        description: "受賞プロダクト：Nonverbal",
        url: "https://0-s0g0.com/productpages/7",
        location: "アジア太平洋大学/大分",
      },
      {
        id: "2025-04",
        icon: "award",
        date: "03",
        title: "Kyutech×ScienceTokyoハッカソンでpixiv賞受賞",
        description: "受賞プロダクト：TECHTECH",
        url: "https://0-s0g0.com/productpages/6",
        location: "東京科学大学/東京",
      },
      {
        id: "2025-03",
        icon: "award",
        date: "02",
        title: "PRTIMES2025winterHackathonで個人最優秀賞受賞",
        description: "受賞プロダクト：DreamShare",
        url: "https://0-s0g0.com/productpages/5",
        location: "PRTIMES本社/東京",
      },
      {
        id: "2025-02",
        icon: "MonitorCheck",
        date: "02",
        title: "StartupWeekend北九州に参加",
      },
      {
        id: "2025-01",
        icon: "award",
        date: "01",
        title: "技育Campで努力賞受賞",
        description: "受賞プロダクト：ThanksLink",
        url: "https://0-s0g0.com/productpages/3",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        id: "2024-03",
        icon: "award",
        date: "12",
        title: "ハックツハッカソンでProgate賞受賞",
        description: "受賞プロダクト：市か区",
        url: "https://0-s0g0.com/productpages/2",
      },
      {
        id: "2024-02",
        icon: "award",
        date: "11",
        title: "KCL☆Hack2024で金賞受賞",
        description: "受賞プロダクト：たまlog",
        url: "https://0-s0g0.com/productpages/1",
        location: "九州工業大学",
      },
      {
        id: "2024-01",
        icon: "MonitorCheck",
        date: "08",
        title: "国際ロボット開発PBLに参加",
        location: "国立台北科技大学/台湾",
      },
    ],
  },
]
