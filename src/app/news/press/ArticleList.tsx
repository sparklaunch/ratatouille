"use client";

import { Article } from "@/types/article";
import { ArticleData } from "@/types/articleData";
import formatDate from "@/utilities/formatDate";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function ArticleList() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [articles, setArticles] = useState<Article[]>([]);
    const [totalPages, setTotalPages] = useState(1);
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
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 5 - 1, totalPages);
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
        <div className={styles.pagination}>
            <p
                onClick={() => {
                    if (currentPage > 1) {
                        router.push(`/news/press?page=${currentPage - 1}`);
                    }
                }}
                className={`${styles.leftCaret} ${currentPage === 1 ? styles.disabledCaret : ""}`}
            >
                &lt;
            </p>
            {[...Array(endPage - startPage + 1)].map((_, index) => {
                const page = startPage + index;
                return (
                    <p
                        key={page}
                        onClick={() => {
                            router.push(`/news/press?page=${page}`);
                        }}
                        className={page === currentPage ? styles.activePage : styles.inactivePage}
                    >
                        {page}
                    </p>
                );
            })}
            <p
                onClick={() => {
                    if (currentPage < totalPages) {
                        router.push(`/news/press?page=${currentPage + 1}`);
                    }
                }}
                className={`${styles.rightCaret} ${currentPage === totalPages ? styles.disabledCaret : ""}`}
            >
                &gt;
            </p>
        </div>
    </div>;
}