import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";
import NewsLetterList from "./NewsLetterList";
import styles from "./style.module.scss";

export default async function NewsLetterPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소통</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span className={styles.activeSubheader}>뉴스레터</span>
                </Link>
                <Link href="/communication/direction">
                    <span>찾아오시는 길</span>
                </Link>
                <Link href="/communication/inquiry">
                    <span>문의하기</span>
                </Link>
            </div>
            <Suspense fallback={<Skeleton />}>
                <NewsLetterList />
            </Suspense>
        </div>
        <Footer />
    </>;
}