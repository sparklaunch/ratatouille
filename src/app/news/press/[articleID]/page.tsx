"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import defaultArticle, { Article } from "@/types/Article";
import formatDate from "@/utilities/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function ArticleContentPage({ params }: { params: Promise<{ articleID: string }> }) {
    const router = useRouter();
    const { articleID } = use(params);
    const [article, setArticle] = useState<Article>(defaultArticle);
    useEffect(() => {
        const getArticle = async () => {
            try {
                const response = await fetch(`/api/article?id=${articleID}`);
                if (response.ok) {
                    const article = await response.json() as Article;
                    setArticle(article);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getArticle();
    }, [articleID]);
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소식</h1>
            <div className={styles.subheader}>
                <Link href="/news/notice">
                    <span>공지 사항</span>
                </Link>
                <Link href="/news/press">
                    <span className={styles.activeSubheader}>언론 보도</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{article.title}</h2>
                    <h3 className={styles.createdDate}>작성일: {formatDate(article.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: article.content
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
        <Footer />
    </>;
}