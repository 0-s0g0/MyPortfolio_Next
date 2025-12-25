"use client";

import Link from 'next/link';
import fotterstyles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Fotter() {

    return (
        <div>
            <div className={fotterstyles.fotter}>
                <div className={fotterstyles.footercircle}>
                    <div className={fotterstyles.footermainText}>
                        <div className={fotterstyles.footermain}>ご覧いただきありがとうございました</div>
                        <div className={fotterstyles.footermain2}>Thank you for your time and interest!</div>
                    </div>
                </div>
                <div className={fotterstyles.footerrectangle}>
                    <div className={fotterstyles.footerbox}>
                        <div className={fotterstyles.footerSubtext}>
                            <div className={fotterstyles.footertext2}>MyPortfolio</div>
                            <div className={fotterstyles.footertext3}>-SogoRei's Products-</div>
                        </div>

                        <div className={fotterstyles.footermain2}>
                                    <div className={fotterstyles.fottericons}>
                                        <Link href="https://www.instagram.com/0_s0g0" >
                                            <FontAwesomeIcon icon={faInstagram} className={fotterstyles.icon}/>
                                        </Link>
                                        <Link href="https://x.com/0_s0g0" >
                                            <FontAwesomeIcon icon={faXTwitter} className={fotterstyles.icon}/>
                                        </Link>
                                        <Link href="https://www.facebook.com/share/1WFxQ2T4mg/" >
                                            <FontAwesomeIcon icon={faFacebook} className={fotterstyles.icon}/>
                                        </Link>
                                        <Link href="https://github.com/0-s0g0" >
                                            <FontAwesomeIcon icon={faGithub} className={fotterstyles.icon}/>
                                        </Link>
                                    </div>
                        </div>
                                
                        
                    </div>
                </div>
                
            </div>
        </div>
      )
    }

