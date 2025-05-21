"use client"

import { useState } from "react"
import { ChevronRight, ExternalLink, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { newsItems, eventReportItems } from "@/app/data/activities"
import { NewsItem, EventReportItem } from "@/app/data/activities"



// URLが外部リンクかどうかを判定する関数
const isExternalUrl = (url: string) => {
  return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")
}

export default function Activities() {
  const [activeTab, setActiveTab] = useState<"お知らせ" | "イベントレポート">("お知らせ")

  

  const getCategoryColor = (category: string) => {
    if (activeTab === "お知らせ") {
      return category === "神奈川情報" ? "bg-[#e5a4a4]" : "bg-[#d4a5bd]"
    } else {
      switch (category) {
        case "イベント":
          return "bg-[#d4a5bd]"
        case "セミナー":
          return "bg-[#c9a5d4]"
        case "ワークショップ":
          return "bg-[#a5c1d4]"
        default:
          return "bg-[#d4a5bd]"
      }
    }
  }

  // タイトルとURLを表示するコンポーネント
  const TitleWithLink = ({ title, url }: { title: string; url?: string | "none" }) => {
    // URLがない、または "none" の場合はただのテキストを表示
    if (!url || url === "none") {
      return <div className="text-[#6d5c5c]">{title}</div>
    }

    // 外部リンクか内部リンクかを判定
    const isExternal = isExternalUrl(url)

    if (isExternal) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6d5c5c] hover:text-[#d4a5bd] transition-colors flex items-center group"
        >
          {title}
          <ExternalLink className="ml-2 h-4 w-4 text-[#d4a5bd] opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      )
    } else {
      return (
        <Link href={url} className="text-[#6d5c5c] hover:text-[#d4a5bd] transition-colors flex items-center group">
          {title}
          <ArrowRight className="ml-2 h-4 w-4 text-[#d4a5bd] opacity-70 group-hover:opacity-100 transition-opacity" />
        </Link>
      )
    }
  }

  return (
    <div className="max-w-4xl mx-auto relative font-serif">
      {/* Tab Navigation */}
      <div className="flex rounded-t-3xl overflow-hidden border-b-0">
        <button
          onClick={() => setActiveTab("お知らせ")}
          className={cn(
            "flex-1 py-4 text-center font-medium transition-colors text-sm md:text-base tracking-wider",
            activeTab === "お知らせ" ? "bg-[#f2e6e6] text-[#9d7575]" : "bg-[#f8f3f3] text-[#b8a3a3] hover:bg-[#f5eded]",
          )}
        >
          お知らせ
        </button>
        <button
          onClick={() => setActiveTab("イベントレポート")}
          className={cn(
            "flex-1 py-4 text-center font-medium transition-colors text-sm md:text-base tracking-wider",
            activeTab === "イベントレポート"
              ? "bg-[#f2e6e6] text-[#9d7575]"
              : "bg-[#f8f3f3] text-[#b8a3a3] hover:bg-[#f5eded]",
          )}
        >
          イベントレポート
        </button>
      </div>

      {/* Content Area */}
      <div className="border border-[#e8d8d8] rounded-b-2xl p-6 pt-8 pb-16 relative bg-[#fdf9f9]">
        {/* Decorative Element Top */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-20">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M95,50 Q100,80 70,95 Q40,100 5,70 Q0,40 30,5 Q60,0 95,30 Q100,60 95,50 Z" fill="#d4a5bd" />
          </svg>
        </div>

        {/* List Items */}
        <div className="space-y-5">
          {activeTab === "お知らせ"
            ? newsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start pb-4 border-b border-[#f0e4e4] hover:bg-[#fef7f7] p-2 rounded-lg transition-colors"
                >
                  <div className="text-[#b8a3a3] whitespace-nowrap text-sm font-light">{item.date}</div>
                  <div
                    className={cn(
                      "px-3 py-1 text-white text-xs whitespace-nowrap rounded-full",
                      getCategoryColor(item.category),
                    )}
                  >
                    {item.category}
                  </div>
                  <TitleWithLink title={item.title} url={item.url} />
                </div>
              ))
            : eventReportItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start pb-4 border-b border-[#f0e4e4] hover:bg-[#fef7f7] p-2 rounded-lg transition-colors"
                >
                  <div className="text-[#b8a3a3] whitespace-nowrap text-sm font-light">{item.date}</div>
                  <div
                    className={cn(
                      "px-3 py-1 text-white text-xs whitespace-nowrap rounded-full",
                      getCategoryColor(item.category),
                    )}
                  >
                    {item.category}
                  </div>
                  <TitleWithLink title={item.title} url={item.url} />
                </div>
              ))}
        </div>

        {/* View All Button */}
        <div className="absolute bottom-6 right-6">
          <button className="bg-[#d4a5bd] text-white px-5 py-2 rounded-full flex items-center text-sm hover:bg-[#c996b0] transition-colors shadow-sm">
            一覧を見る
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        {/* Decorative Element Bottom */}
        <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden opacity-20">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M5,50 Q0,20 30,5 Q60,0 95,30 Q100,60 70,95 Q40,100 5,70 Q0,40 5,50 Z" fill="#d4a5bd" />
          </svg>
        </div>
      </div>
    </div>
  )
}
