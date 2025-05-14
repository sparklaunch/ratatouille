"use client";

import { NoticeData } from "@/types/noticeData";
import defaultNotices, { Notices } from "@/types/notices";
import formatDate from "@/utilities/formatDate";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput } from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NoticeList() {
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
                    const totalNormalCount = data.totalNormalCount || 0;
                    const computedPages = Math.ceil(totalNormalCount / (10 - data.totalFixedNotices.length));
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
    return <div className={styles.board}>
        <div className={styles.boardHeader}>
            <p>번호</p>
            <p>제목</p>
            <p>작성일</p>
        </div>
        <div className={styles.boardContent}>
            {notices.fixedNotices.map((notice, index) => (
                <Link key={`fixed-${index}`} className={styles.fixedNotice} href={`/news/notice/${notice.id}`}>
                    <p>{notice.id}</p>
                    <p>{notice.title}</p>
                    <p>{formatDate(notice.createdAt)}</p>
                </Link>
            ))}
            {notices.normalNotices.map((notice, index) => (
                <Link key={`normal-${index}`} className={styles.normalNotice} href={`/news/notice/${notice.id}`}>
                    <p>{notice.id}</p>
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
            {[...Array(endPage - startPage + 1)].map((_, index) => {
                const page = startPage + index;
                return (
                    <p
                        key={page}
                        onClick={() => {
                            router.push(`/news/notice?page=${page}`);
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