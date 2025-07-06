import { Briefcase, Code, Rocket, Building } from "lucide-react"
import { Experience } from "@/app/data/activities"

export const getIconColor = (color: string) => {
  switch (color) {
    case "bg-blue-500":
      return "text-blue-500"
    case "bg-green-500":
      return "text-green-500"
    case "bg-red-500":
      return "text-red-500"
    case "bg-yellow-500":
      return "text-yellow-500"
    default:
      return "text-gray-500"
  }
}