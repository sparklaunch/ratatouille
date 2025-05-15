import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
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
            <div className={styles.addressContainer}>
                <Image src="/images/Disney.webp" alt="두더집 사진" fill className={styles.addressPhoto} />
                <div className={styles.address}>
                    <div className={styles.addressItem}>
                        <h2>주소</h2>
                        <p>서울시 은평구 불광로 89-4</p>
                    </div>
                    <div className={styles.addressItem}>
                        <h2>연락처</h2>
                        <p>02-355-7910</p>
                    </div>
                    <div className={styles.addressItem}>
                        <h2>이메일</h2>
                        <p>seeds@theseeds.asia</p>
                    </div>
                    <div className={styles.addressItem}>
                        <h2>운영 시간</h2>
                        <p>수~토 12:00 ~ 20:00</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.mapContainer}>
            <Image src="/images/Map.jpg" alt="두더집 위치" fill />
        </div>
        <Footer />
    </>;
}