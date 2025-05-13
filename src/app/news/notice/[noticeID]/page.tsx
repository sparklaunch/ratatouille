"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import formatDate from "@/utilities/formatDate";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NoticeContentPage({ params }: { params: Promise<{ noticeID: String }> }) {
    const router = useRouter();
    const { noticeID } = use(params);
    const [notice, setNotice] = useState<Notice>();
    useEffect(() => {
        const getNotice = async () => {
            try {
                const response = await fetch(`/api/notice?id=${noticeID}`);
                if (response.ok) {
                    const { notice } = await response.json();
                    setNotice(notice);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getNotice();
    }, [noticeID]);
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
            {!notice ? <Skeleton /> : <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{notice.title}</h2>
                    <h3 className={styles.createdDate}>작성일: {formatDate(notice.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: notice.content
                    }} />
                </div>
            </div>}
            <div className={styles.appendix}>
                <Image src="/icons/Share.svg" alt="공유" width={24} height={24} />
                <Image src="/icons/Print.svg" alt="인쇄" width={24} height={24} />
            </div>
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>목록 보기</p>
            </div>
        </div>
        <Footer />
    </>;
}