"use client";

import { useRouter } from "@/i18n/routing";
import defaultNotice, { Notice } from "@/types/Notice";
import formatDate from "@/utilities/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NoticeContentPage() {
    const { noticeID } = useParams() as { noticeID: string };
    const router = useRouter();
    const [notice, setNotice] = useState<Notice>(defaultNotice);
    useEffect(() => {
        const getNotice = async () => {
            try {
                const response = await fetch(`/api/notice?id=${noticeID}`);
                if (response.ok) {
                    const notice = await response.json() as Notice;
                    setNotice(notice);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getNotice();
    }, [noticeID]);
    return <>
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
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{notice.title}</h2>
                    <h3 className={styles.createdDate}>작성일: {formatDate(notice.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: notice.content
                    }} />
                </div>
            </div>
            <div className={styles.appendix}>
                <Image src="/icons/Share.svg" alt="공유" width={24} height={24} />
                <Image src="/icons/Print.svg" alt="인쇄" width={24} height={24} onClick={() => window.print()} />
            </div>
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>목록 보기</p>
            </div>
        </div>
    </>;
}