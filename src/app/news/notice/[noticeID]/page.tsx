"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NoticeContentPage({ params }: { params: Promise<{ noticeID: String }> }) {
    const { noticeID } = use(params);
    const [, setLoading] = useState(false);
    const [notice, setNotice] = useState<Notice>();
    useEffect(() => {
        const getNotice = async () => {
            setLoading(true);
            const response = await fetch(`/api/notice?id=${noticeID}`, {
                cache: "no-store"
            });
            if (response.ok) {
                const data = await response.json() as Notice;
                setNotice(data);
            } else {
                console.error("Failed to fetch notice");
            }
            setLoading(false);
        };
        getNotice();
    }, []);
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소식</h1>
            <div className={styles.subheader}>
                <Link href="/news/notice">
                    <span className={styles.activeSubheader}>공지 사항</span>
                </Link>
                <Link href="/news/press">
                    <span>언론 보도</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>

            </div>
        </div>
        <Footer />
    </>;
}