"use client"

import { useRouter } from "next/navigation"
import TimelineComponent from "../components/timeline-component"
import { events } from "@/app/data/events"
import { ArrowRight } from "lucide-react"



export default function Activites() {
  const router = useRouter()

  const handleViewAll = () => {
    router.push("/events")
  }

  return (
 
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">イベント参加履歴</h1>
        <p className="text-gray-600">これまでに参加したイベントや活動の記録です</p>
      </div>

      <TimelineComponent events={events} showAll={false} />

      {/* 詳細へボタン */}
      <div className="mt-12 text-center">
        <div
          onClick={handleViewAll}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer font-medium"
        >
          すべてのイベントを見る
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
   

  )
}
