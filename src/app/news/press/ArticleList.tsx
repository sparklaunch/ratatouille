"use client";

import { Article } from "@/types/article";
import { ArticleData } from "@/types/articleData";
import formatDate from "@/utilities/formatDate";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function ArticleList() {
    const searchParams = useSearchParams();
    const [articles, setArticles] = useState<Article[]>([]);
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
        <div className={styles.articlesContainer}>
            {articles.map(article => {
                return <div className={styles.articleContainer} key={article.id}>
                    <Image src="/images/Placeholder.jpg" alt="Placeholder image" fill className={styles.articleThumbnail} />
                    <div className={styles.articleTitle}>
                        <h2>{article.title}</h2>
                        <p>{formatDate(article.createdAt)}</p>
                    </div>
                </div>;
            })}
        </div>
        <div className={styles.searchBox}>
            <OutlinedInput
                endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
            />
        </div>
    </div>;
}