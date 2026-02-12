'use client';
import Image from "next/image";
import Link from 'next/link';

import aboutmeGirl from "./../../Public/images/Me.png"
import aboutmestyles from './aboutme.module.css'
import { timelineData } from './../../data/activities';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink, Award } from "lucide-react"

export default function Aboutme() {
    // activityからawardのみを抽出（全件）
    const awards = timelineData
        .flatMap(yearData =>
            yearData.items
                .filter(item => item.icon === "award")
                .map(item => ({
                    ...item,
                    year: yearData.year
                }))
        );

    return (
        <div  className={aboutmestyles.aboutmeback}>
            <div className={aboutmestyles.aboutmeBox}>
                <Image src={aboutmeGirl} alt="" className={aboutmestyles.aboutmeimg}></Image>
                <div  className={aboutmestyles.aboutmetext}>
                    <div className={aboutmestyles.aboutmetextName}>Sogo Rei</div>
                    <div className={aboutmestyles.aboutmetextSub}>Kyutechの大学院生です（修士1年 / 27卒）</div>
                    <div className={aboutmestyles.aboutmetextMain}>
                    大学院では医用画像処理について研究しながら、アイデアをWebサイトやアプリとして形にする面白さに夢中です。
                    <br />
                    ご縁をいただいたWeb制作では、一つひとつの出会いを大切に、心を込めてお手伝いさせていただいています。
                    </div>
                    <div className={aboutmestyles.aboutmetexttag}>
                    北九州のITコミュニティ<Link href="https://stepbycode.work/">「StepByCode」</Link>の代表を務めており、皆さんと一緒に学ぶ時間も、私の大切な活動です。
                    </div>

                    {/* Awards Section */}
                    <div className="mt-6 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                            <Award className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                            <span className="font-semibold text-sm text-amber-900 dark:text-amber-300">受賞歴</span>
                        </div>
                        <div className="border-l-2 border-amber-300 dark:border-amber-600 pl-4">
                            {awards.map((award) => (
                                <div
                                    key={award.id}
                                    className="text-xs text-gray-700 dark:text-gray-300 py-1"
                                >
                                    <div className="font-medium">
                                        <span className="text-amber-700 dark:text-amber-400">{award.year}.{award.date}</span> {award.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex my-2">
                        直近の活動まとめ
                        <a
                            href={'./Activites'}
                            className="flex-shrink-0 transition-colors"
                        >
                            <ExternalLink className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                    <div className={aboutmestyles.aboutmeicons}>

                        <Link href="https://www.instagram.com/0_s0g0" >
                            <FontAwesomeIcon icon={faInstagram} className={aboutmestyles.icon}/>
                        </Link>
                        <Link href="https://x.com/0_s0g0" >
                            <FontAwesomeIcon icon={faXTwitter} className={aboutmestyles.icon}/>
                        </Link>
                        <Link href="https://www.facebook.com/share/1WFxQ2T4mg/" >
                            <FontAwesomeIcon icon={faFacebook} className={aboutmestyles.icon}/>
                        </Link>
                        <Link href="https://github.com/0-s0g0" >
                            <FontAwesomeIcon icon={faGithub} className={aboutmestyles.icon}/>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
      )
    }
