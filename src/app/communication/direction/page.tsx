import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import styles from "./style.module.scss";

export default function DirectionPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소통</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span>뉴스레터</span>
                </Link>
                <Link href="/communication/direction" className={styles.activeSubheader}>
                    <span>찾아오시는 길</span>
                </Link>
                <Link href="/communication/inquiry">
                    <span>문의하기</span>
                </Link>
            </div>
        </div>
        <Footer />
    </>;
}