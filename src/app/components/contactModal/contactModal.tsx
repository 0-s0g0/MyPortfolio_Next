"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "./contactModal.module.css"; // モーダルのスタイル

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

    // URL のクエリパラメータを取得
    const isOpen = searchParams.get("modal") === "contact"; // `?modal=contact` のとき開く

    // モーダルを閉じる
    const closeModal = () => {
        router.replace("/"); // `router.push` ではなく `replace` を使う
    };

    if (!isOpen) return null; // `?modal=contact` じゃないなら何も表示しない

    return (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>お問い合わせ</h2>
                <p>ここにお問い合わせフォームを入れる</p>
                <button onClick={closeModal}>閉じる</button>
            </div>
        </div>
    );
}
