"use client";

import { Link, useRouter } from "@/i18n/routing";
import { NewsLetter } from "@/types/NewsLetter";
import { NewsLetterData } from "@/types/NewsLetterData";
import formatDate from "@/utilities/formatDate";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NewsLetterList() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [newsLetters, setNewsLetters] = useState<NewsLetter[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    let currentPage = 1;
    if (searchParams.has("page")) {
        currentPage = Number(searchParams.get("page"));
    }
    useEffect(() => {
        const getNewsLetters = async () => {
            try {
                const response = await fetch(`/api/news-letters?page=${currentPage}`, {
                    cache: "no-store"
                });
                if (response.ok) {
                    const { totalCount, newsLetters } = await response.json() as NewsLetterData;
                    setNewsLetters(newsLetters);
                    const computedPages = Math.ceil(totalCount / 12);
                    setTotalPages(computedPages);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getNewsLetters();
    }, [currentPage]);
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 5 - 1, totalPages);
    const pageRange = Math.max(0, endPage - startPage + 1);
    return <div className={styles.newsLetterContainer}>
        <div className={styles.newsLettersContainer}>
            {newsLetters.map(newsLetter => {
                return <Link href={`/communication/newsletters/${newsLetter.id}`} className={styles.newsLetterItemContainer} key={newsLetter.id}>
                    <Image src="/images/Placeholder.jpg" alt="Placeholder image" fill className={styles.newsLetterThumbnail} />
                    <div className={styles.newsLetterTitle}>
                        <h2>{newsLetter.title}</h2>
                        <p>{formatDate(newsLetter.createdAt)}</p>
                    </div>
                </Link>;
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
                        router.push(`/communication/newsletters?page=${currentPage - 1}`);
                    }
                }}
                className={`${styles.leftCaret} ${currentPage === 1 && styles.disabledCaret}`}
            >
                &lt;
            </p>
            {pageRange > 0 &&
                [...Array(pageRange)].map((_, index) => {
                    const page = startPage + index;
                    return (
                        <p
                            key={page}
                            onClick={() => {
                                router.push(`/communication/newsletters?page=${page}`);
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
                        router.push(`/communication/newsletters?page=${currentPage + 1}`);
                    }
                }}
                className={`${styles.rightCaret} ${currentPage === totalPages && styles.disabledCaret}`}
            >
                &gt;
            </p>
        </div>
    </div>;
}