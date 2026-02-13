export interface TimelineItem {
  id: string
  icon:   "MonitorSmartphone"| "code" | "building" | "star" | "MonitorCheck" | "award"
  date: string // MM.DD format
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
        id: "4",
        icon: "award",
        date: "02",
        title: "福岡未来ITスタートアップアワード理事長賞受賞",
        description: "受賞プロダクト：BreathVizAI",
        url: "https://0-s0g0.com/productpages/13",
        location: "ONE FUKUOKA BLDG./福岡",
      },
      {
        id: "3",
        icon: "MonitorSmartphone",
        date: "01",
        title: "BreathVizAIサイト制作",
        description: "HP公開中",
        url: "https://hp.breathvizai.com/",
      },
      {
        id: "2",
        icon: "MonitorCheck",
        date: "01",
        title: "NYCU innoBridge Parks Taiwan Program参加",
        description: "5days R&D business program & Pitch",
        location: "TaiwanTechArea/台湾",
      },
      {
        id: "1",
        icon: "MonitorCheck",
        date: "01",
        title: "九工大PreGapファウンド事業助成金精度採択",
        description: "事業内容：呼吸器音解析AIプラットフォーム開発",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        id: "25",
        icon: "MonitorCheck",
        date: "11",
        title: "チャレキャラ2025最終発表参加",
        description: "発表作品：TSUNAGULINK",
        url: "https://0-s0g0.com/productpages/15",
      },
      {
        id: "24",
        icon: "MonitorCheck",
        date: "12",
        title: "ROCKET PITCH NIGHT FUKUOKA 2025 に登壇",
        description: "発表作品：BreathVizAI",
        url: "https://0-s0g0.com/productpages/13",
        location: "ONE FUKUOKA BLDG./福岡",
      },
      {
        id: "23",
        icon: "award",
        date: "11",
        title: "技育展2025優勝&ウィングアーク1st賞受賞",
        description: "受賞プロダクト：BreathVizAI",
        url: "https://0-s0g0.com/productpages/13",
        location: "TOKYO NODE/東京",
      },
      {
        id: "22",
        icon: "MonitorCheck",
        date: "11",
        title: "国際会議ICCAS2025登壇",
        description: "発表研究：Medical Image Processing",
        location: "韓国/仁川",
      },
            {
        id: "21",
        icon: "award",
        date: "10",
        title: "ハックツハッカソン~ウイングアーク1st x ギラヴァンツ北九州編~最優秀賞受賞",
        description: "受賞プロダクト：YellStriker2025",
        url: "https://0-s0g0.com/productpages/14",
      },
      {
        id: "20",
        icon: "award",
        date: "09",
        title: "JunctionXKyutechでSecondPrize賞受賞",
        description: "受賞プロダクト：BreathVizAI",
        url: "https://0-s0g0.com/productpages/13",
      },
      {
        id: "19",
        icon: "building",
        date: "09",
        title: "N様サマーインターン参加",
        description: "5days8人チーム要件定義書類の作成と発表",
      },
      {
        id: "18",
        icon: "award",
        date: "09",
        title: "技育博で株式会社CARTAHOLDINGS賞受賞",
        description: "受賞プロダクト：たまlog",
        url: "https://0-s0g0.com/productpages/1",
        location: "虎ノ門ヒルズステーションタワー/東京",
      },
      {
        id: "17",
        icon: "building",
        date: "09",
        title: "S様サマーインターン参加",
        description: "4days5人チーム開発",
      },
      {
        id: "16",
        icon: "building",
        date: "09",
        title: "Iグループ様サマーインターン参加",
        description: "5days個人開発",
      },
            {
        id: "14",
        icon: "building",
        date: "08",
        title: "株式会社C様サマーインターン「Treasure」参加",
        description: "3weeksフルサイクル開発",
        url: "https://0-s0g0.com/productpages/11",
      },
                  {
        id: "13",
        icon: "MonitorSmartphone",
        date: "08",
        title: "一般社団法人TSUNAGU様サイト制作",
        description: "HP公開中",
        url: "https://tsunagu-sep.org/",
      },
            {
        id: "12",
        icon: "building",
        date: "06",
        title: "Rグループ株式会社様インターン参加",
        description: "RubyonrailsAPIバックエンド開発",
      },
            {
        id: "11",
        icon: "MonitorSmartphone",
        date: "06",
        title: "有限会社北九電機様サイト制作",
        description: "HP公開中",
        url: "https://kitakyudenki.vercel.app/",
        
      },
       {
        id: "10",
        icon: "building",
        date: "06",
        title: "株式会社F様インターン参加",
        description: "最適化アルゴリズムの構築とPOC作成,",
      },


       {
        id: "8",
        icon: "award",
        date: "03",
        title: "電子情報通信学会九州支部 成績優秀賞受賞",
        description: "電子情報通信学会九州支部2024年度受賞者一覧",
        url: "https://www.ieice.org/kyushu/siseki2024/",

      },
     {
        id: "7",
        icon: "award",
        date: "03",
        title: "学業成績最優秀賞受賞",

      },
      {
        id: "6",
        icon: "MonitorSmartphone",
        date: "03",
        title: "STEPBYCODEサイト制作",
        description: "HP公開中",
        url: "https://kitakyudenki.vercel.app/",
      },
      {
        id: "5",
        icon: "award",
        date: "03",
        title: "APU×Kyutechミニハッカソンで金賞受賞",
        description: "受賞プロダクト：Nonverbal",
        url: "https://0-s0g0.com/productpages/7",
        location: "アジア太平洋大学/大分",
      },
      {
        id: "4",
        icon: "award",
        date: "03",
        title: "Kyutech×ScienceTokyoハッカソンでpixiv賞受賞",
        description: "受賞プロダクト：TECHTECH",
        url: "https://0-s0g0.com/productpages/6",
        location: "東京科学大学/東京",
      },
      {
        id: "3",
        icon: "award",
        date: "02",
        title: "PRTIMES2025winterHackathonで個人最優秀賞受賞",
        description: "受賞プロダクト：DreamShare",
        url: "https://0-s0g0.com/productpages/5",
        location: "PRTIMES本社/東京",
      },
      {
        id: "2",
        icon: "MonitorCheck",
        date: "02",
        title: "StartupWeekend北九州に参加",

      },
      {
        id: "1",
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
        id: "3",
        icon: "award",
        date: "12",
        title: "ハックツハッカソンでProgate賞受賞",
        description: "受賞プロダクト：市か区",
        url: "https://0-s0g0.com/productpages/2",
      },
      {
        id: "2",
        icon: "award",
        date: "11",
        title: "KCL☆Hack2024で金賞受賞",
        description: "受賞プロダクト：たまlog",
        url: "https://0-s0g0.com/productpages/1",
        location: "九州工業大学",
      },
      {
        id: "1",
        icon: "MonitorCheck",
        date: "08",
        title: "国際ロボット開発PBLに参加",
        location: "国立台北科技大学/台湾",
      },
    ],
  },
]
