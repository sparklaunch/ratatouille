import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import formatDate from "@/utilities/formatDate";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../../../../lib/prisma";
import styles from "./style.module.scss";

export default async function NoticeContentPage({ params }: { params: Promise<{ noticeID: String }> }) {
    const { noticeID } = await params;
    const notice = await prisma.notices.findUnique({
        where: {
            id: Number(noticeID)
        }
    });
    if (!notice) {
        return <>
            <p>공지 사항을 찾을 수 없습니다.</p>
        </>;
    }
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
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{notice.title}</h2>
                    <h3 className={styles.createdDate}>작성일: {formatDate(notice.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: notice.content
                    }} />
                </div>
            </div>
            <div className={styles.appendix}>
                <Image src="/icons/Share.svg" alt="공유" width={24} height={24} />
                <Image src="/icons/Print.svg" alt="인쇄" width={24} height={24} />
            </div>
            <div className={styles.goBackToListButton}>
                <Link href="/news/notice">
                    <span>목록 보기</span>
                </Link>
            </div>
        </div>
        <Footer />
    </>;
}