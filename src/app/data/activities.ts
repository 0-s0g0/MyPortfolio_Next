export interface Activities {
  id: string
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  companyUrl?: string
  icon: "briefcase" | "code" | "rocket" | "building"
  color: string
}


export const Activitiesdata: Activities[] = [
  {
    id: "1",
    company: "テックイノベーション株式会社",
    position: "シニアフロントエンドエンジニア",
    period: "2022年4月 - 現在",
    location: "東京, 日本",
    description: "大規模なWebアプリケーションの開発をリードし、ユーザーエクスペリエンスの向上に貢献。",
    achievements: [
      "新機能の開発により、ユーザーエンゲージメントを30%向上",
      "コードレビュープロセスの改善により、バグ発生率を50%削減",
      "チーム内でのReact/TypeScriptのベストプラクティスを確立",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    companyUrl: "https://example.com",
    icon: "code",
    color: "bg-blue-500",
  },
  {
    id: "2",
    company: "デジタルソリューションズ",
    position: "フロントエンドエンジニア",
    period: "2020年6月 - 2022年3月",
    location: "大阪, 日本",
    description: "ECサイトやコーポレートサイトの開発・保守を担当。レスポンシブデザインの実装に特化。",
    achievements: [
      "モバイルファーストのアプローチでサイト表示速度を40%改善",
      "アクセシビリティ対応により、WCAG 2.1 AA準拠を達成",
      "新人エンジニアのメンタリングを担当",
    ],
    technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Firebase"],
    companyUrl: "https://example.com",
    icon: "briefcase",
    color: "bg-green-500",
  },
  {
    id: "3",
    company: "スタートアップ株式会社",
    position: "ジュニアエンジニア",
    period: "2019年4月 - 2020年5月",
    location: "東京, 日本",
    description: "スタートアップ環境でフルスタック開発を経験。プロダクトの初期開発から運用まで幅広く担当。",
    achievements: [
      "MVP開発を3ヶ月で完了し、プロダクトローンチに貢献",
      "ユーザーフィードバックを基にした機能改善を継続的に実施",
      "CI/CDパイプラインの構築により、デプロイ時間を80%短縮",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    companyUrl: "https://example.com",
    icon: "rocket",
    color: "bg-purple-500",
  },
]
