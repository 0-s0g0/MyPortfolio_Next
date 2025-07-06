"use client"

import { useRouter } from "next/navigation"
import TimelineComponent from "@/app/events/components/timeline-component"
import { events } from "@/app/data/events"
import { ArrowLeft } from "lucide-react"


import PageHeader from "@/app/productpages/components/Header/pageHeader";
import Fotter from "@/app/components/footer/footer";


export default function EventsPage() {
  const router = useRouter()

  const handleGoBack = () => {
    router.push("/")
  }

  return (
    <>
        <PageHeader />
   
    <div className="max-w-4xl mx-auto p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">すべてのイベント</h1>
        <p className="text-gray-600">参加したすべてのイベントと活動の詳細記録</p>
      </div>

      <TimelineComponent events={events} showAll={true} />
    </div>
     <Fotter />
     </>
  )
}
