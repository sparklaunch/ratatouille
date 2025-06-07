"use client";

import { useRouter } from "@/i18n/routing";
import defaultArticle, { Article } from "@/types/Article";
import formatDate from "@/utilities/formatDate";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function PressReleaseContentPage() {
    const t = useTranslations("article");
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
            <h1 className={styles.header}>{t("news")}</h1>
            <div className={styles.subheader}>
                <Link href="/news/notices">
                    <span>{t("notices")}</span>
                </Link>
                <Link href="/news/articles">
                    <span className={styles.activeSubheader}>{t("press-releases")}</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{article.title}</h2>
                    <h3 className={styles.createdDate}>{t("date")}: {formatDate(article.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: article.content
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