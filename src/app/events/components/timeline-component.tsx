"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Calendar, MapPin } from "lucide-react"
import { type Event, eventConfig } from "@/app/data/events"

interface TimelineComponentProps {
  events: Event[]
  showAll?: boolean
}

export default function TimelineComponent({ events, showAll = false }: TimelineComponentProps) {
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set())

  const toggleEvent = (eventId: string) => {
    const newExpanded = new Set(expandedEvents)
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId)
    } else {
      newExpanded.add(eventId)
    }
    setExpandedEvents(newExpanded)
  }

  // 日付順にソート（新しい順）
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // 表示するイベントを制限
  const displayEvents = showAll ? sortedEvents : sortedEvents.slice(0, 6)

  return (
    <div className="relative">
      {/* タイムライン縦線 */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />

      <div className="space-y-8">
        {displayEvents.map((event, index) => {
          const config = eventConfig[event.type]
          const IconComponent = config.icon
          const isExpanded = expandedEvents.has(event.id)

          return (
            <div key={event.id} className="relative">
              {/* アイコン */}
              <div
                className={`absolute left-0 w-12 h-12 rounded-full ${config.color} flex items-center justify-center z-10 shadow-lg`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* イベントカード */}
              <div className="ml-20">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleEvent(event.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-3">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg leading-tight text-gray-900">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(event.date).toLocaleDateString("ja-JP", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                            {event.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.badgeColor}`}>
                          {config.label}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 詳細セクション */}
                  {isExpanded && (
                    <div className="px-6 pb-6 space-y-4 border-t border-gray-100 bg-gray-50">
                      <div className="pt-4">
                        <h4 className="font-medium mb-2 text-gray-900">詳細</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{event.details}</p>
                      </div>

                      {event.achievements && event.achievements.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-2 text-gray-900">成果・実績</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.achievements.map((achievement, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {event.technologies && event.technologies.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-2 text-gray-900">使用技術</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 border border-gray-300 text-gray-700 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
