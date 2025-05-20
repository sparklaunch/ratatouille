"use client";

import { Link, useRouter } from "@/i18n/routing";
import defaultNewsLetter, { NewsLetter } from "@/types/NewsLetter";
import formatDate from "@/utilities/formatDate";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NewsLetterContentPage({ params }: { params: Promise<{ newsLetterID: string }> }) {
    const router = useRouter();
    const { newsLetterID } = use(params);
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
            <h1 className={styles.header}>소통</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span className={styles.activeSubheader}>뉴스레터</span>
                </Link>
                <Link href="/communication/direction">
                    <span>찾아오시는 길</span>
                </Link>
                <Link href="/communication/inquiry">
                    <span>문의하기</span>
                </Link>
            </div>
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