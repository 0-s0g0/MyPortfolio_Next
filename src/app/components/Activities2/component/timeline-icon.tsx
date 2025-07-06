import { getIconColor} from "@/app/components/Activities2/utils/icon-utils"

interface TimelineIconProps {
  icon: string
  color: string
}

export function TimelineIcon({ icon, color }: TimelineIconProps) {
  return (
    <div className="relative z-10 flex-shrink-0">
      <div
        className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-white shadow-lg ring-4 ring-background transition-all duration-300 hover:scale-110 hover:shadow-xl`}
      >
        {getIconColor(icon)}
      </div>
      {/* 接続線 */}
      <div className="absolute top-8 left-8 w-8 h-0.5 bg-gradient-to-r from-primary/40 to-transparent"></div>
    </div>
  )
}
