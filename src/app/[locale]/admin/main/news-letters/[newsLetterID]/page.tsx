"use client";

import { useRouter } from "@/i18n/routing";
import defaultNewsLetter, { NewsLetter } from "@/types/NewsLetter";
import formatDate from "@/utilities/formatDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function AdminNewsLetterContentPage() {
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
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{newsLetter.title}</h2>
                    <h3 className={styles.createdDate}>작성일: {formatDate(newsLetter.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: newsLetter.content
                    }} />
                </div>
            </div>
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>목록 보기</p>
            </div>
        </div>
    </>;
}