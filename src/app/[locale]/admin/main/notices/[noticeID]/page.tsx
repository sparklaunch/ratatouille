"use client";

import { useRouter } from "@/i18n/routing";
import defaultNotice, { Notice } from "@/types/Notice";
import formatDate from "@/utilities/formatDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function AdminNoticeContentPage() {
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
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>목록으로</p>
            </div>
        </div>
    </>;
}