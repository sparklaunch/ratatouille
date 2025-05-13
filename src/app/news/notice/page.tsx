"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import formatDate from "@/utilities/formatDate";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput, Skeleton } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function NoticePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [notices, setNotices] = useState<Notices>({
        fixedNotices: [],
        normalNotices: []
    });
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getNotices = async () => {
            setIsLoading(true);
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
            } else {
                console.error("Failed to fetch notices");
            }
            setIsLoading(false);
        };
        getNotices();
    }, [currentPage]);
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 5 - 1, totalPages);
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소식</h1>
            <div className={styles.subheader}>
                <Link href="/news/notice">
                    <span className={styles.activeSubheader}>공지 사항</span>
                </Link>
                <Link href="/news/press">
                    <span>언론 보도</span>
                </Link>
            </div>
            <div className={styles.board}>
                <div className={styles.boardHeader}>
                    <p>번호</p>
                    <p>제목</p>
                    <p>작성일</p>
                </div>
                <div className={styles.boardContent}>
                    {isLoading ? (
                        <Skeleton variant="rounded" height={710} animation="wave" className={styles.skeleton} />
                    ) : (
                        <>
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
                        </>
                    )}
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
                                setCurrentPage(currentPage - 1);
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
                                onClick={() => setCurrentPage(page)}
                                className={page === currentPage ? styles.activePage : styles.inactivePage}
                            >
                                {page}
                            </p>
                        );
                    })}
                    <p
                        onClick={() => {
                            if (currentPage < totalPages) {
                                setCurrentPage(currentPage + 1);
                            }
                        }}
                        className={`${styles.rightCaret} ${currentPage === totalPages ? styles.disabledCaret : ""}`}
                    >
                        &gt;
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}