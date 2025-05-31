import AdminHeader from "@/components/adminHeader/AdminHeader";
import { Link } from "@/i18n/routing";
import { Suspense } from "react";
import AdminNoticesList from "./AdminNoticesList";
import styles from "./style.module.scss";

export default async function AdminNoticesPage() {
    return <>
        <AdminHeader />
        <div className={styles.container}>
            <h1 className={styles.header}>공지 사항</h1>
            <div className={styles.subheader}>
                <Link href="/admin/main/notices/new" className={styles.newNoticeLink}>새 공지 사항</Link>
                <p className={styles.cleanUpButton}>고아 데이터 정리</p>
            </div>
            <Suspense>
                <AdminNoticesList />
            </Suspense>
        </div>
    </>;
}