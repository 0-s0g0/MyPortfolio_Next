import Image from "next/image";
import Link from 'next/link';

import aboutmeGirl from "./../../Public/images/Me.png"
import aboutmestyles from './aboutme.module.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "lucide-react"

export default function Aboutme() {

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
