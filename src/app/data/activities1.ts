
export interface NewsItem {
  date: string;
  category: "神奈川情報" | "運合会情報";
  title: string;
  url?: string | "none" // URLを追加、"none"または未定義の場合は矢印を表示しない;
}

export interface EventReportItem {
  date: string;
  category: "イベント" | "セミナー" | "ワークショップ";
  title: string;
  url?: string | "none" // URLを追加、"none"または未定義の場合は矢印を表示しない;
}

export const newsItems: NewsItem[] = [
    {
      date: "2023.07.25",
      category: "神奈川情報",
      title: "アップへ〜 2023年6月分のランキング発表…",
      url: "/news/2023-07-25-3r-mountain",
    },
    {
      date: "2023.07.21",
      category: "運合会情報",
      title: "自由研究にも！小学生向け食品ロス学習「ごちそうさま！チャレンジシート」",
      url: "https://example.com/food-loss-education",
    },
    {
      date: "2023.07.19",
      category: "運合会情報",
      title: "予約登録米で「サステナブル★セレクション2023」二つ星",
      url: "none", // 矢印を表示しない
    },
    {
      date: "2023.07.18",
      category: "神奈川情報",
      title: "書き損じはがきの寄付にご協力ありがとうございました",
      url: "/news/2023-07-18-postcard-donation",
    },
    {
      date: "2023.07.10",
      category: "運合会情報",
      title: "『直火炒めチャーハン』が製法・製造ラインも見直し、さらにバラバラでサステナブルにリニューアル！",
      // URLなし - 矢印を表示しない
    },
  ];

export const eventReportItems: EventReportItem[] = [
    {
      date: "2023.08.15",
      category: "イベント",
      title: "夏休み親子エコワークショップ開催レポート 〜廃材から作るリサイクルアート〜",
      url: "/events/2023-08-15-eco-workshop",
    },
    {
      date: "2023.08.05",
      category: "セミナー",
      title: "食品ロス削減セミナー「家庭でできるフードロス対策」参加者の声",
      url: "https://example.com/food-loss-seminar",
    },
    {
      date: "2023.07.28",
      category: "ワークショップ",
      title: "地域農業体験ワークショップ「田植えから収穫まで」第一回活動報告",
      url: "none", // 矢印を表示しない
    },
    {
      date: "2023.07.15",
      category: "イベント",
      title: "環境フェスティバル2023 出展報告とアンケート結果のまとめ",
      url: "/events/2023-07-15-eco-festival",
    },
    {
      date: "2023.07.02",
      category: "セミナー",
      title: "サステナブル生活講座「プラスチックフリーな暮らし」実践報告会",
      // URLなし - 矢印を表示しない
    },
  ]