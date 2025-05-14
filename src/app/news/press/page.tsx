"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Article } from "@/types/article";
import type { ArticleData } from "@/types/articleData";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function PressPage() {
    const searchParams = useSearchParams();
    const [, setArticles] = useState<Article[]>([]);
    const [, setTotalPages] = useState(1);
    let currentPage = 1;
    if (searchParams.has("page")) {
        currentPage = Number(searchParams.get("page"));
    }
    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await fetch(`/api/articles?page=${currentPage}`, {
                    cache: "no-store"
                });
                if (response.ok) {
                    const { totalCount, articles } = await response.json() as ArticleData;
                    setArticles(articles);
                    const computedPages = Math.ceil(totalCount / 12);
                    setTotalPages(computedPages);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getArticles();
    }, [currentPage]);
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
            <Suspense fallback={<Skeleton />}>
                <div className={styles.pressContainer}>

                </div>
            </Suspense>
        </div>
        <Footer />
    </>;
}