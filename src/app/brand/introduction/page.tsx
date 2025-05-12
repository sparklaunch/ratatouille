import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import styles from "./style.module.scss";

export default function IntroductionPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>브랜드 스토리</h1>
            <div className={styles.subheader}>
                <Link href="/brand/introduction" className={styles.activeSubheader}>
                    <span>씨즈 소개</span>
                </Link>
                <Link href="/brand/history">
                    <span>연혁</span>
                </Link>
            </div>
        </div>
        <Footer />
    </>;
}