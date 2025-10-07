"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { Suspense } from "react";

import aboutmeGirl from "./../../Public/images/Me.png"
import styles from "./contactModal.module.css"; // CSSモジュール
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ContactModalWrapper() {
    return (
        <Suspense fallback={null}>
            <ContactModal />
        </Suspense>
    );
}

function ContactModal() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const isOpen = searchParams.get("modal") === "contact";

    const closeModal = () => {
        router.replace("/");
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalcovertopImage}></div>
                <div className={styles.modalcoverImage}>
                <Image src={aboutmeGirl} alt="" className={styles.aboutmeimg}></Image>
                    <div className={styles.modalname}>Sogo Rei</div>
                    <div className={styles.modaltitle}>-Please Follow Me-</div>
                    <div className={styles.contacticons}>
                        <Link href="https://www.instagram.com/0_s0g0">
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        </Link>
                        <Link href="https://x.com/0_s0g0">
                            <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
                        </Link>
                        <Link href="https://www.facebook.com/share/1WFxQ2T4mg/">
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        </Link>
                        <Link href="https://github.com/0-s0g0">
                            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                        </Link>
                    </div>
                    <p className={styles.modalDescription}>Connections create possibilities</p>
                    <button className={styles.closeButton} onClick={closeModal}>Go to website</button>
                </div>
            </div>
        </div>
    );
}