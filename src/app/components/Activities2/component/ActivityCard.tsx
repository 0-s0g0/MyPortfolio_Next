"use client"
import { ChevronDown, ChevronRight, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Activities } from "@/app/data/activities"

interface ActivityCardProps {
  experience: Activities
  index: number
  isExpanded: boolean
  onToggle: () => void
}

export function ActivityCard({ experience, index, isExpanded, onToggle }: ActivityCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl border-l-4 border-l-primary/20 hover:border-l-primary group">
      <CardHeader className="pb-3">
        <div className="cursor-pointer" onClick={onToggle}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {experience.position}
                </h3>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform" />
                )}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-lg font-medium text-primary">{experience.company}</h4>
                {experience.companyUrl && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-300">
          <div className="space-y-6 border-t pt-6">
            <div>
              <h5 className="font-semibold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                主な実績
              </h5>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                使用技術
              </h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
