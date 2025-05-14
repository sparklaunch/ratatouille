import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import styles from "./style.module.scss";

export default async function PressPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소식</h1>
            <div className={styles.subheader}>
                <Link href="/news/notice">
                    <span>공지 사항</span>
                </Link>
                <Link href="/news/press">
                    <span className={styles.activeSubheader}>언론 보도</span>
                </Link>
            </div>
            <div className={styles.pressContainer}>

            </div>
        </div>
        <Footer />
    </>;
}