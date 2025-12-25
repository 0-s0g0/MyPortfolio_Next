import { StaticImageData } from "next/image";
import product1img from "./../Public/images/tamalog.png";

export interface Project {
    id: number;
    title: string;
    description: string;
    image:StaticImageData;
    tag: string;
    awardTitle:string[];
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
    date?:string;
    
  }

  export const projects: Project[] = [
  {
    id: 1,
    title: "たまLog",
    description: "画像処理×体組成計管理アプリ",
    image: product1img,
    tag: "Web App",
    technologies: ["Next.js/TS", "JavaScript", "docker","CSS", "Python/Flask"],
    awardTitle: ["KCL☆Hack (2024/11) 金賞&技育博vol4(2025/09)企業賞"],
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
    date:'2024.11',
},





];
