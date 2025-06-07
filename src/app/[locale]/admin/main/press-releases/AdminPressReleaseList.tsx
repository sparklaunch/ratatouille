"use client";

import { Link, useRouter } from "@/i18n/routing";
import { PressRelease } from "@/types/PressRelease";
import { PressReleaseData } from "@/types/PressReleaseData";
import formatDate from "@/utilities/formatDate";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment, OutlinedInput } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function AdminPressReleaseList() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    let currentPage = 1;
    if (searchParams.has("page")) {
        currentPage = Number(searchParams.get("page"));
    }
    useEffect(() => {
        const getPressReleases = async () => {
            try {
                const response = await fetch(`/api/press-releases?page=${currentPage}`, {
                    cache: "no-store"
                });
                if (response.ok) {
                    const { totalCount, pressReleases } = await response.json() as PressReleaseData;
                    setPressReleases(pressReleases);
                    const computedPages = Math.ceil(totalCount / 12);
                    setTotalPages(computedPages);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getPressReleases();
    }, [currentPage]);
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 5 - 1, totalPages);
    const pageRange = Math.max(0, endPage - startPage + 1);
    return <div className={styles.pressContainer}>
        <div className={styles.pressReleasesContainer}>
            {pressReleases.map(pressRelease => {
                return <Link href={`/admin/main/press-releases/${pressRelease.id}`} className={styles.pressReleaseContainer} key={pressRelease.id}>
                    <Image src="/images/Placeholder.jpg" alt="Placeholder image" fill className={styles.pressReleaseThumbnail} />
                    <div className={styles.pressReleaseTitle}>
                        <h2>{pressRelease.title}</h2>
                        <p>{formatDate(pressRelease.createdAt)}</p>
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
                        router.push(`/admin/main/press-releases?page=${currentPage - 1}`);
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
                                router.push(`/admin/main/press-releases?page=${page}`);
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
                        router.push(`/admin/main/press-releases?page=${currentPage + 1}`);
                    }
                }}
                className={`${styles.rightCaret} ${currentPage === totalPages && styles.disabledCaret}`}
            >
                &gt;
            </p>
        </div>
    </div>;
}