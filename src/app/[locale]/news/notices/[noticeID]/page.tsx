"use client";

import { useRouter } from "@/i18n/routing";
import defaultNotice, { Notice } from "@/types/Notice";
import formatDate from "@/utilities/formatDate";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NoticeContentPage() {
    const t = useTranslations("notice");
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
            <h1 className={styles.header}>{t("news")}</h1>
            <div className={styles.subheader}>
                <Link href="/news/notices">
                    <span className={styles.activeSubheader}>{t("notices")}</span>
                </Link>
                <Link href="/news/articles">
                    <span>{t("press-releases")}</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{notice.title}</h2>
                    <h3 className={styles.createdDate}>{t("date")}: {formatDate(notice.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: notice.content
                    }} />
                </div>
            </div>
            <div className={styles.appendix}>
                <Image src="/icons/Share.svg" alt={t("share-alternate")} width={24} height={24} />
                <Image src="/icons/Print.svg" alt={t("print-alternate")} width={24} height={24} onClick={() => window.print()} />
            </div>
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>{t("go-back")}</p>
            </div>
        </div>
    </>;
}