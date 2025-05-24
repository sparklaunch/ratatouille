"use client";

import { useRouter } from "@/i18n/routing";
import defaultArticle, { Article } from "@/types/Article";
import formatDate from "@/utilities/formatDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function AdminArticleContentPage() {
    const { articleID } = useParams() as { articleID: string };
    const router = useRouter();
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
        <div className={styles.container}>
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
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>목록으로</p>
            </div>
        </div>
    </>;
}