import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./style.module.scss";

export default function BrandPage() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.title}>브랜드 스토리</h1>
        </div>
        <Footer />
    </>;
}