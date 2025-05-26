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
            <Link href="/admin/main/notices/new" className={styles.newNoticeLink}>새 공지 사항</Link>
            <Suspense>
                <AdminNoticesList />
            </Suspense>
        </div>
    </>;
}