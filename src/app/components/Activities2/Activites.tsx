"use client"

import { useState } from "react"
import { Activitiesdata } from "@/app/data/activities"
import { ActivityCard } from "@/app/components/Activities2/component/ActivityCard"
import { TimelineIcon } from "@/app/components/Activities2/component/timeline-icon"
import { SectionHeader } from "@/app/components/Activities2/component/section-header"
import { TimelineLine } from "@/app/components/Activities2/component/timeline-line"

export default function Activities() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <SectionHeader title="経歴" description="これまでの職歴と実績をご紹介します" />

      <div className="relative">
        <TimelineLine />

        <div className="space-y-8">
          {Activitiesdata.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start gap-8">
              <TimelineIcon icon={exp.icon} color={exp.color} />

              <div className="flex-1 -mt-2">
                <ActivityCard
                  experience={exp}
                  index={index}
                  isExpanded={expandedId === exp.id}
                  onToggle={() => toggleExpanded(exp.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
