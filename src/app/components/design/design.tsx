"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 画像のインポート
import designLogo1img from "@/app/Public/designs/Logo1.png";
import designLogo2img from "@/app/Public/designs/Logo2.png";
import designLogo3img from "@/app/Public/designs/Logo3.png";
import designLogo4img from "@/app/Public/designs/Logo4.png";
import designLogo5img from "@/app/Public/designs/Logo5.png";
import designLP1img from "@/app/Public/designs/LP1.png";
import designPoster1img from "@/app/Public/designs/Poster1.png";
import designPoster2img from "@/app/Public/designs/Poster2.jpeg";
import designPoster3img from "@/app/Public/designs/Poster3.jpeg";
import designPoster4img from "@/app/Public/designs/Poster4.png";

// 画像と説明文をセットで管理する
const images = [
  { src: designLogo1img, title: "自主制作-たまlog" },
  { src: designLogo2img, title: "自主制作-ポートフォリオ" },
  { src: designLogo3img, title: "イベント制作-SkillFit" },
  { src: designLogo4img, title: "依頼制作-一般社団法人TSUNAGU様" },
  { src: designLogo5img, title: "依頼制作-KIT_PBL" },
  { src: designLP1img, title: "イベント制作_LP" },
  { src: designPoster1img, title: "イベント制作_Techカンファレンスハハッカソン" },
  { src: designPoster2img, title: "依頼制作_戸畑区役所様" },
  { src: designPoster3img, title: "依頼制作_戸畑区役所様" },
  { src: designPoster4img, title: "イベント制作_コミュニティ・リンク・パーティ" },
];

export const DesignSlider = () => {
  // 無限ループ用に配列を3倍に複製（よりスムーズな無限スクロールのため）
  const tripledImages = [...images, ...images, ...images];

  // 上段と下段用に配列を分割
  const firstHalf = images.slice(0, Math.ceil(images.length / 2));
  const secondHalf = images.slice(Math.ceil(images.length / 2));

  const tripledFirstHalf = [...firstHalf, ...firstHalf, ...firstHalf];
  const tripledSecondHalf = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <div className="bg-white dark:bg-gray-900 py-10 w-full max-w-full overflow-x-hidden">
      {/* PC版: 1段で横スクロール */}
      <div className="hidden md:block overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{
            x: [0, "-33.333%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {tripledImages.map((item, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 px-4 cursor-pointer"
              style={{ width: "400px" }}
            >
              {/* 画像部分 */}
              <div className="relative h-40 w-full overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />

                {/* ホバー時に現れるオーバーレイ */}
                <div className="absolute inset-0 flex items-end justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="mb-4 whitespace-normal px-2 text-center text-sm font-bold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* スマホ版: 2段で逆方向スクロール */}
      <div className="md:hidden flex flex-col gap-20 ">
        {/* 上段: 左へスクロール */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex"
            animate={{
              x: [0, "-33.333%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {tripledFirstHalf.map((item, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 px-2 cursor-pointer"
                style={{ width: "200px" }}
              >
                <div className="relative h-32 w-full overflow-hidden rounded-lg shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="mb-2 whitespace-normal px-2 text-center text-xs font-bold text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 下段: 右へスクロール（逆方向） */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex"
            animate={{
              x: ["-33.333%", 0],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {tripledSecondHalf.map((item, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 px-2 cursor-pointer"
                style={{ width: "200px" }}
              >
                <div className="relative h-32 w-full overflow-hidden rounded-lg shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="mb-2 whitespace-normal px-2 text-center text-xs font-bold text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};