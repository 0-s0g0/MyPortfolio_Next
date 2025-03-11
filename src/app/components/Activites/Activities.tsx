'use client';
import { useState } from "react";
import { activities, Activity } from "./../../data/acitives";
import { Users, Calendar, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import activestyles from "./Activities.module.css";

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<Activity>(activities[0]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  return (
    <div  className={activestyles.activeback}>
        <div  className={activestyles.activeback2}>       

        <div>
          <div className={activestyles.indexback}>
            <button onClick={() => setStartIndex(startIndex > 0 ? startIndex - 1 : startIndex)}>
              <ChevronUp className={activestyles.ChevronUp} />
            </button>
            {activities.slice(startIndex, startIndex + visibleCount).map((activity) => (
              <div
              key={activity.id}
              className={`${activestyles.indexbox} ${selectedActivity?.id === activity.id ? activestyles.selected : ""}`}
              onClick={() => setSelectedActivity(activity)}
              onMouseEnter={() => setHoveredId(activity.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <p className="text-sm">{activity.date}</p>
              </div>
            ))}
            <button onClick={() => setStartIndex(startIndex + visibleCount < activities.length ? startIndex + 1 : startIndex)}>
              <ChevronDown className={activestyles.ChevronUp} />
            </button>
          </div>
        </div>


        <div  className={activestyles.deback}>
            <div className={activestyles.imgback}>
                <img src={selectedActivity.image} alt={selectedActivity.title} className={activestyles.img} />
                <h2 className={activestyles.title}>{selectedActivity.title}</h2>
                <div className={activestyles.date}>
                    <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                    <span>{selectedActivity.date}</span>
                </div>
                <div className={activestyles.tag}>
                    <Users className="w-5 h-5 mr-2 text-gray-400" />
                    <span>{selectedActivity.participants} 人が参加</span>
                </div>
            </div>

            <div className={activestyles.description}>
                <div>{selectedActivity.description}</div>
            </div>
        </div>


      </div>
    </div>
  );
}
