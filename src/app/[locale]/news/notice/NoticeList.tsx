"use client";

import { Link, useRouter } from "@/i18n/routing";
import { NoticeData } from "@/types/NoticeData";
import defaultNotices, { Notices } from "@/types/Notices";
import formatDate from "@/utilities/formatDate";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput } from "@mui/material";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NoticeList() {
    const t = useTranslations("notices");
    const searchParams = useSearchParams();
    const router = useRouter();
    let currentPage = 1;
    if (searchParams.has("page")) {
        currentPage = Number(searchParams.get("page")) ?? 1;
    }
    const [notices, setNotices] = useState<Notices>(defaultNotices);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        const getNotices = async () => {
            try {
                const response = await fetch(`/api/notices?page=${currentPage}`, {
                    cache: "no-store"
                });
                if (response.ok) {
                    const data = await response.json() as NoticeData;
                    setNotices({
                        fixedNotices: data.totalFixedNotices,
                        normalNotices: data.normalNotices
                    });
                    const fixedLength = data.totalFixedNotices.length;
                    const perPage = Math.max(1, 10 - fixedLength);
                    const computedPages = Math.ceil(data.totalNormalCount / perPage);
                    setTotalPages(computedPages);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getNotices();
    }, [currentPage]);
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 5 - 1, totalPages);
    const pageRange = Math.max(0, endPage - startPage + 1);
    return <div className={styles.board}>
        <div className={styles.boardHeader}>
            <p>{t("index")}</p>
            <p>{t("title")}</p>
            <p>{t("date")}</p>
        </div>
        <div className={styles.boardContent}>
            {notices.fixedNotices.map((notice, index) => (
                <Link key={`fixed-${index}`} className={styles.fixedNotice} href={`/news/notice/${notice.id}`}>
                    <p>{notice.index}</p>
                    <p>{notice.title}</p>
                    <p>{formatDate(notice.createdAt)}</p>
                </Link>
            ))}
            {notices.normalNotices.map((notice, index) => (
                <Link key={`normal-${index}`} className={styles.normalNotice} href={`/news/notice/${notice.id}`}>
                    <p>{notice.index}</p>
                    <p>{notice.title}</p>
                    <p>{formatDate(notice.createdAt)}</p>
                </Link>
            ))}
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
                        router.push(`/news/notice?page=${currentPage - 1}`);
                    }
                }}
                className={`${styles.leftCaret} ${currentPage === 1 ? styles.disabledCaret : ""}`}
            >
                &lt;
            </p>
            {pageRange > 0 &&
                [...Array(pageRange)].map((_, index) => {
                    const page = startPage + index;
                    return (
                        <p
                            key={page}
                            onClick={() => router.push(`/news/notice?page=${page}`)}
                            className={page === currentPage ? styles.activePage : styles.inactivePage}
                        >
                            {page}
                        </p>
                    );
                })
            }
            <p
                onClick={() => {
                    if (currentPage < totalPages) {
                        router.push(`/news/notice?page=${currentPage + 1}`);
                    }
                }}
                className={`${styles.rightCaret} ${currentPage === totalPages ? styles.disabledCaret : ""}`}
            >
                &gt;
            </p>
        </div>
    </div>;
}