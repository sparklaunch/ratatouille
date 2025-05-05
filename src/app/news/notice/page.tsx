import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import styles from "./style.module.scss";

async function getNotices() {
    const response = await fetch(`http://localhost:3000/api/notices?token=${process.env.API_SECRET_KEY}`, {
        cache: "no-store"
    });
    if (!response.ok)
        throw new Error("Failed to fetch");
    return response.json();
}

export default async function Notice() {
    const notices = await getNotices();
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
            <div>
                {notices.map((notice: any) => {
                    return <div key={notice.id}>{notice.title}</div>;
                })}
            </div>
        </div>
        <Footer />
    </>;
}