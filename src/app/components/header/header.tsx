"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/navigation";
import headertyles from './headerstyles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo2 from './../../Public/images/logo2.png'

export default function Header() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    // メニューの開閉を切り替える
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openModal = () => {
        router.push("?modal=contact", { scroll: false });
    };

    return (
        <div className={headertyles.header}>
            <div className={headertyles.logo}>
                <Image src={logo2} alt="" className={headertyles.logoimg}>
            </Image></div>

            {/* ハンバーガーメニューのアイコン */}
            <FontAwesomeIcon 
                icon={faBars} 
                className={headertyles.menuIcon} 
                onClick={toggleMenu} 
            />

            {/* メニュー */}
            <div className={`${headertyles.navbar} ${menuOpen ? headertyles.open : ""}`}>
                <ScrollLink to="about-me" smooth={true} duration={500} offset={-50}>
                    <div className={headertyles.headerBIG}>About</div>
                    <div className={headertyles.headerSMALL}>わたしについて</div>
                </ScrollLink>
                <ScrollLink to="products" smooth={true} duration={500} offset={-50}>
                    <div className={headertyles.headerBIG}>Products</div>
                    <div className={headertyles.headerSMALL}>作品紹介</div>
                </ScrollLink>
                <button onClick={openModal}>
                    <div className={headertyles.headerBIG}>Contact</div>
                    <div className={headertyles.headerSMALL}>お問い合わせ</div>
                </button>
            </div>
        </div>
    );
}
