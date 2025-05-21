"use client";

import { Link, useRouter } from "@/i18n/routing";
import defaultNewsLetter, { NewsLetter } from "@/types/NewsLetter";
import formatDate from "@/utilities/formatDate";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NewsLetterContentPage() {
    const t = useTranslations("news-letter");
    const { newsLetterID } = useParams() as { newsLetterID: string };
    const router = useRouter();
    const [newsLetter, setNewsLetter] = useState<NewsLetter>(defaultNewsLetter);
    useEffect(() => {
        const getNewsLetter = async () => {
            try {
                const response = await fetch(`/api/newsletter?id=${newsLetterID}`);
                if (response.ok) {
                    const newsLetter = await response.json() as NewsLetter;
                    setNewsLetter(newsLetter);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getNewsLetter();
    }, [newsLetterID]);
    return <>
        <div className={styles.container}>
            <h1 className={styles.header}>{t("communication")}</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span className={styles.activeSubheader}>{t("news-letter")}</span>
                </Link>
                <Link href="/communication/direction">
                    <span>{t("directions")}</span>
                </Link>
                <Link href="/communication/inquiry">
                    <span>{t("inquiry")}</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{newsLetter.title}</h2>
                    <h3 className={styles.createdDate}>{t("date")}: {formatDate(newsLetter.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: newsLetter.content
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