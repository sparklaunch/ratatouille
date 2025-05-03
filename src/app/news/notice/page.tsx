import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Notice() {
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
        </div>
        <Footer />
    </>;
}