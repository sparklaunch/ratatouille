"use client";

import { Article } from "@/types/article";
import { ArticleData } from "@/types/articleData";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function ArticleList() {
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
    return <div className={styles.pressContainer}>

    </div>;
}