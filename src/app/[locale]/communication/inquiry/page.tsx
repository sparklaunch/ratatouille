import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import InquiryForm from "./InquiryForm";
import styles from "./style.module.scss";

export default async function InquiryPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소통</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span>뉴스레터</span>
                </Link>
                <Link href="/communication/direction">
                    <span>찾아오시는 길</span>
                </Link>
                <Link href="/communication/inquiry" className={styles.activeSubheader}>
                    <span>문의하기</span>
                </Link>
            </div>
        </div>
        <InquiryForm />
        <Footer />
    </>;
}