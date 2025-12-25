'use client';

import { useEffect, useState } from "react";

interface TechCircularLoadingProps {
  onComplete?: () => void;
}

export default function TechLoadingScreen({ onComplete }: TechCircularLoadingProps) {
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const steps = 100;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // イージング：最初は慎重に解析、後半一気にレンダリング
      const easedProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const newPercentage = Math.min(Math.floor(easedProgress * 100), 100);
      setPercentage(newPercentage);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => onComplete?.(), 600);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const radius = 90;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#efd8c9] dark:bg-[#744040] transition-all duration-700 ${
        isComplete ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8 relative">
        {/* 円形スキャナー */}
        <div className="relative group">
          <svg height={radius * 2} width={radius * 2} className="transform -rotate-90 filter drop-shadow-[0_0_8px_rgba(116,64,64,0.2)]">
            {/* ベースレール */}
            <circle
              stroke="currentColor"
              fill="transparent"
              strokeWidth={1}
              r={normalizedRadius + 8}
              cx={radius}
              cy={radius}
              className="text-[#744040]/10 dark:text-[#e1cabb]/10"
            />
            {/* メインプログレス（画像処理の進捗） */}
            <circle
              stroke="currentColor"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference + " " + circumference}
              style={{ strokeDashoffset, transition: "stroke-dashoffset 0.2s ease-out" }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="text-[#744040] dark:text-[#e1cabb]"
            />
          </svg>

          {/* 中央：ステータス表示 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
            <span className="text-[10px] opacity-50 text-[#744040] dark:text-[#e1cabb] mb-1 uppercase tracking-tighter">BitDepth</span>
            <div className="text-4xl font-black text-[#744040] dark:text-[#e1cabb]">
              {percentage}
            </div>
          </div>
          
          {/* フォーカスリング：合焦していくようなアニメーション */}
          <div className={`absolute -inset-4 rounded-full border border-dashed border-[#744040]/20 dark:border-[#e1cabb]/20 animate-[spin_10s_linear_infinite]`} />
        </div>

        {/* テクニカルラベル */}
        <div className="text-center font-mono">
        <p className="text-xs tracking-[0.3em] text-[#744040] dark:text-[#e1cabb] uppercase font-bold">
        {percentage < 50 ? "Scanning_Sogorei_Archive" : "Building_The_World"}
        </p>
          <div className="mt-4 flex justify-center gap-1.5">
             {[0, 1, 2].map((i) => (
               <div key={i} 
                 className="w-1.5 h-1.5 bg-[#744040] dark:bg-[#e1cabb] rounded-full animate-bounce" 
                 style={{ animationDelay: `${i * 150}ms` }} 
               />
             ))}
          </div>
        </div>
      </div>

    </div>
  );
}