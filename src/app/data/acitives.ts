import { StaticImageData } from "next/image";
import product1img from "./../Public/images/tamalog.png";
import product2img from "./../Public/images/shikaku.png";
import product3img from "./../Public/images/ThanksLink.png";
import product4img from "./../Public/images/Portfolio.png";
import product5img from "./../Public/images/Dream.png";
import product6img from "./../Public/images/Tekuteku.png";
import product7img from "./../Public/images/APU.jpg";

export interface Activity {
    id: number;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
    participants: number;
  }
  
  export const activities: Activity[] = [
    {
      id: 1,
      title: "React勉強会 2024",
      date: "2024年4月15日",
      category: "勉強会",
      description: "最新のReactの機能とベストプラクティスについて学びます。Hooks、Suspense、Server Componentsなどの実践的な使い方を解説します。初心者から上級者まで参加できます。",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      participants: 45
    },
    {
      id: 2,
      title: "クラウドネイティブ開発ワークショップ",
      date: "2024年4月20日",
      category: "ワークショップ",
      description: "Kubernetes、Docker、マイクロサービスアーキテクチャについて実践的に学びます。実際のクラウド環境でハンズオン形式で進めていきます。",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      participants: 30
    },
    {
      id: 3,
      title: "AI/ML エンジニアミートアップ",
      date: "2024年4月25日",
      category: "ミートアップ",
      description: "AI・機械学習分野のエンジニアが集まり、最新のトレンドや技術について議論します。実際のプロジェクト事例の共有も行います。",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      participants: 60
    },
    {
        id: 4,
        title: "4AI/ML エンジニアミートアップ",
        date: "2024年4月25日",
        category: "ミートアップ",
        description: "AI・機械学習分野のエンジニアが集まり、最新のトレンドや技術について議論します。実際のプロジェクト事例の共有も行います。",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        participants: 60
      },
      {
        id: 5,
        title: "5AI/ML エンジニアミートアップ",
        date: "2024年4月25日",
        category: "ミートアップ",
        description: "AI・機械学習分野のエンジニアが集まり、最新のトレンドや技術について議論します。実際のプロジェクト事例の共有も行います。",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        participants: 60
      },{
        id: 6,
        title: "6AI/ML エンジニアミートアップ",
        date: "2024年4月25日",
        category: "ミートアップ",
        description: "AI・機械学習分野のエンジニアが集まり、最新のトレンドや技術について議論します。実際のプロジェクト事例の共有も行います。",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        participants: 60
      },
      {
        id: 7,
        title: "7AI/ML エンジニアミートアップ",
        date: "2024年4月25日",
        category: "ミートアップ",
        description: "AI・機械学習分野のエンジニアが集まり、最新のトレンドや技術について議論します。実際のプロジェクト事例の共有も行います。",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        participants: 60
      },
      {
        id: 8,
        title: "8AI/ML エンジニアミートアップ",
        date: "2024年4月25日",
        category: "ミートアップ",
        description: "AI・機械学習分野のエンジニアが集まり、最新のトレンドや技術について議論します。実際のプロジェクト事例の共有も行います。",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        participants: 60
      }
    // 必要に応じて他のデータも追加
  ];
  