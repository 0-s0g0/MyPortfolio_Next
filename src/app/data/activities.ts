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
    year: 2025,
    items: [
                    {
        id: "15",
        icon: "building",
        date: "08",
        title: "I様サマーインターン参加",
        description: "3weeksフルサイクル開発",
        url: "https://0-s0g0.com/productpages/11",
      },
            {
        id: "14",
        icon: "building",
        date: "08",
        title: "株式会社CARTAHOLDINGS様サマーインターン「Treasure」参加",
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
        title: "電子情報通信学会九州支部 成績優秀賞を受賞",
        description: "電子情報通信学会九州支部2024年度受賞者一覧",
        url: "https://www.ieice.org/kyushu/siseki2024/",

      },
     {
        id: "7",
        icon: "award",
        date: "03",
        title: "学業成績最優秀賞を受賞",

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
        title: "APU×Kyutechミニハッカソンで金賞を受賞",
        description: "受賞プロダクト：Nonverbal",
        url: "https://0-s0g0.com/productpages/7",
        location: "アジア太平洋大学/大分",
      },
      {
        id: "4",
        icon: "award",
        date: "03",
        title: "Kyutech×ScienceTokyoハッカソンでpixiv賞を受賞",
        description: "受賞プロダクト：TECHTECH",
        url: "https://0-s0g0.com/productpages/6",
        location: "東京科学大学/東京",
      },
      {
        id: "3",
        icon: "award",
        date: "02",
        title: "PRTIMES2025winterHackathonで個人最優秀賞を受賞",
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
        title: "技育Campで努力賞を受賞",
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
        title: "ハックツハッカソンでProgate賞を受賞",
        description: "受賞プロダクト：市か区",
        url: "https://0-s0g0.com/productpages/2",
      },
      {
        id: "2",
        icon: "award",
        date: "11",
        title: "KCL☆HAck2024で金賞受賞",
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
