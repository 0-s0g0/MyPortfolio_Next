import { Code, Briefcase, Trophy, Lightbulb, Laptop, GraduationCap, BookOpen } from "lucide-react"

export type EventType =
  | "hackathon"
  | "internship"
  | "business-contest"
  | "ideathon"
  | "contract-dev"
  | "academic"
  | "study-group"

export interface Event {
  id: string
  title: string
  date: string
  type: EventType
  location?: string
  description: string
  details: string
  achievements?: string[]
  technologies?: string[]
}

export const eventConfig = {
  hackathon: {
    label: "ハッカソン",
    icon: Code,
    color: "bg-blue-500",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  internship: {
    label: "インターン",
    icon: Briefcase,
    color: "bg-green-500",
    badgeColor: "bg-green-100 text-green-800",
  },
  "business-contest": {
    label: "ビジネスコンテスト",
    icon: Trophy,
    color: "bg-yellow-500",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
  ideathon: {
    label: "アイデアソン",
    icon: Lightbulb,
    color: "bg-purple-500",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  "contract-dev": {
    label: "受託開発",
    icon: Laptop,
    color: "bg-orange-500",
    badgeColor: "bg-orange-100 text-orange-800",
  },
  academic: {
    label: "学会・学業",
    icon: GraduationCap,
    color: "bg-indigo-500",
    badgeColor: "bg-indigo-100 text-indigo-800",
  },
  "study-group": {
    label: "勉強会",
    icon: BookOpen,
    color: "bg-pink-500",
    badgeColor: "bg-pink-100 text-pink-800",
  },
}

export const events: Event[] = [
  {
    id: "1",
    title: "AI×医療ハッカソン 2024",
    date: "2024-03-15",
    type: "hackathon",
    location: "東京",
    description: "医療現場の課題をAIで解決するハッカソンに参加",
    details:
      "48時間で医療従事者の業務効率化を目指すWebアプリケーションを開発。チームリーダーとして4人のメンバーをまとめ、要件定義からデプロイまでを担当しました。",
    achievements: ["最優秀賞受賞", "チームリーダー"],
    technologies: ["React", "Python", "FastAPI", "OpenAI API"],
  },
  {
    id: "2",
    title: "スタートアップ企業でのフロントエンド開発インターン",
    date: "2024-02-01",
    type: "internship",
    location: "渋谷",
    description: "3ヶ月間のフロントエンド開発インターンシップ",
    details:
      "SaaS製品のフロントエンド開発を担当。新機能の実装からパフォーマンス改善まで幅広く経験しました。アジャイル開発手法を学び、実際のプロダクト開発に携わることができました。",
    achievements: ["正社員オファー獲得", "パフォーマンス30%改善"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "3",
    title: "全国学生ビジネスプランコンテスト",
    date: "2024-01-20",
    type: "business-contest",
    location: "オンライン",
    description: "サステナブルな社会を目指すビジネスプランを提案",
    details:
      "環境問題解決をテーマにしたビジネスプランを作成。市場調査から収益モデルまで詳細に検討し、プレゼンテーションを行いました。",
    achievements: ["準優勝", "オーディエンス賞"],
    technologies: [],
  },
  {
    id: "4",
    title: "EdTech アイデアソン",
    date: "2023-12-10",
    type: "ideathon",
    location: "大阪",
    description: "教育×テクノロジーのアイデア創出イベント",
    details:
      "教育現場の課題を解決するアイデアを24時間で考案。多様なバックグラウンドを持つメンバーとブレインストーミングを行い、プロトタイプまで作成しました。",
    achievements: ["アイデア賞受賞"],
    technologies: ["Figma", "Notion"],
  },
  {
    id: "5",
    title: "ECサイト開発プロジェクト",
    date: "2023-11-01",
    type: "contract-dev",
    location: "リモート",
    description: "中小企業向けECサイトの開発を受託",
    details:
      "クライアントの要望に基づいてECサイトを一から開発。要件定義、設計、実装、テスト、デプロイまでの全工程を担当しました。",
    achievements: ["売上20%向上に貢献", "クライアント満足度95%"],
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe API"],
  },
  {
    id: "6",
    title: "情報処理学会 学生研究発表会",
    date: "2023-09-15",
    type: "academic",
    location: "京都",
    description: "機械学習を用いた画像認識に関する研究発表",
    details:
      "卒業研究の成果を学会で発表。深層学習を用いた画像分類手法の改良について研究し、既存手法より高い精度を達成しました。",
    achievements: ["学生奨励賞受賞", "論文採択"],
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    id: "7",
    title: "React勉強会 - 最新機能を学ぼう",
    date: "2023-08-05",
    type: "study-group",
    location: "新宿",
    description: "React 18の新機能について学ぶ勉強会",
    details:
      "React 18で追加された新機能について深く学習。Concurrent FeaturesやSuspenseの活用方法について実際にコードを書きながら理解を深めました。",
    achievements: ["LT発表", "参加者30名"],
    technologies: ["React 18", "Next.js 13"],
  },
  {
    id: "8",
    title: "Web3ハッカソン 2023",
    date: "2023-07-20",
    type: "hackathon",
    location: "六本木",
    description: "ブロックチェーン技術を活用したDAppの開発",
    details:
      "分散型アプリケーションの開発に挑戦。スマートコントラクトの実装からフロントエンドまで一貫して開発しました。",
    achievements: ["技術賞受賞"],
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
  },
  {
    id: "9",
    title: "UI/UXデザイン勉強会",
    date: "2023-06-15",
    type: "study-group",
    location: "表参道",
    description: "ユーザー中心設計について学ぶワークショップ",
    details: "実際のプロダクトを題材にしたペルソナ設計からプロトタイプ作成まで体験。デザイン思考の重要性を学びました。",
    achievements: ["ベストプロトタイプ賞"],
    technologies: ["Figma", "Miro"],
  },
  {
    id: "10",
    title: "モバイルアプリ開発インターン",
    date: "2023-05-01",
    type: "internship",
    location: "新宿",
    description: "2ヶ月間のモバイルアプリ開発インターンシップ",
    details: "React Nativeを使ったクロスプラットフォームアプリの開発に従事。アプリストアへのリリースまで経験しました。",
    achievements: ["アプリストア公開", "ダウンロード数1万突破"],
    technologies: ["React Native", "Firebase", "Redux"],
  },
]
