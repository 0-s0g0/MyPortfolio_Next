import type { TimelineYear, TimelineItem } from "@/app/data/activities"
import { MonitorSmartphone, Code, Building, Star, Award, ExternalLink,  MonitorCheck } from "lucide-react"

interface TimelineProps {
  data: TimelineYear[]
}

const iconMap = {
  MonitorSmartphone: MonitorSmartphone,
  code: Code,
  building: Building,
  star: Star,
  MonitorCheck:MonitorCheck,
  award: Award,
}

const iconColorMap = {
  MonitorSmartphone: "bg-pink-100 text-pink-600",
  code: "bg-blue-100 text-blue-600",
  building: "bg-green-100 text-green-600",
  star: "bg-purple-100 text-purple-600",
  MonitorCheck: "bg-teal-100 text-teal-600",
  award: "bg-yellow-100 text-yellow-600",
}

function TimelineItemComponent({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  const IconComponent = iconMap[item.icon]
  const iconColorClass = iconColorMap[item.icon]

  return (
    <div className="relative flex items-start gap-4 pb-8">
      {/* Date */}
      <div className="flex-shrink-0 w-12 text-right">
        <span className="text-base text-muted-foreground font-mono">{item.date}</span>
      </div>

      {/* Icon */}
      <div className="relative flex-shrink-0">
        <div className="relative">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColorClass} relative z-10`}>
            <IconComponent className="w-4 h-4" />
          </div>
          <div className="absolute top-1/2 left-8 w-4 h-px bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2" />
        </div>
        {!isLast && <div className="absolute top-8 left-1/2 w-px h-full bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2" />}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-medium text-foreground leading-relaxed">{item.title}</h3>
        {item.description && (
          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
        {item.location && <p className="text-sm text-amber-900 text-muted-foreground mt-1">@ {item.location}</p>}
      </div>
    </div>
  )
}

export function Timeline({ data }: TimelineProps) {
  const totalItems = data.reduce((sum, yearData) => sum + yearData.items.length, 0)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5rem] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />

        {data.map((yearData, yearIndex) => (
          <div key={yearData.year} className="relative">
            {/* Year header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12"></div> {/* Spacer for date column */}
              <div className="flex-1">
                <h2 className=" bg-[#e1cabba4] py-2 px-4 rounded-full text-center w-1/2 text-4xl font-bold text-foreground">{yearData.year}</h2>
              </div>
            </div>

            {/* Timeline items */}
            <div className="relative">
              {yearData.items.map((item, itemIndex) => (
                <TimelineItemComponent
                  key={item.id}
                  item={item}
                  isLast={itemIndex === yearData.items.length - 1 && yearIndex === data.length - 1}
                />
              ))}
            </div>

            {yearIndex < data.length - 1 && <div className="mb-12" />}
          </div>
        ))}
      </div>
    </div>
  )
}
