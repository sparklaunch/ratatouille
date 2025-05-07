"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import formatDate from "@/utilities/formatDate";
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
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getNotices = async () => {
            setLoading(true);
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
                const computedPages = Math.ceil(totalNormalCount / 10);
                setTotalPages(computedPages);
            } else {
                console.error("Failed to fetch notices");
            }
            setLoading(false);
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
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                        <>
                            {notices.fixedNotices.map((notice, index) => (
                                <div key={`fixed-${index}`} className={styles.fixedNotice}>
                                    <p>{notice.id}</p>
                                    <p>{notice.title}</p>
                                    <p>{formatDate(notice.createdAt)}</p>
                                </div>
                            ))}
                            {notices.normalNotices.map((notice, index) => (
                                <div key={`normal-${index}`} className={styles.normalNotice}>
                                    <p>{notice.id}</p>
                                    <p>{notice.title}</p>
                                    <p>{formatDate(notice.createdAt)}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className={styles.searchBox}>
                    <input type="search" />
                </div>
                <div className={styles.pagination}>
                    <p onClick={() => setCurrentPage(previous => Math.max(1, previous - 1))} className={styles.leftCaret}>&lt;</p>
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
                    <p onClick={() => setCurrentPage(previous => previous + 1)} className={styles.rightCaret}>&gt;</p>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}