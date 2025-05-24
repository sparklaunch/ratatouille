import AdminHeader from "@/components/adminHeader/AdminHeader";
import { Suspense } from "react";
import AdminNoticesList from "./AdminNoticesList";
import styles from "./style.module.scss";

export default async function AdminNoticesPage() {
    return <>
        <AdminHeader />
        <div className={styles.container}>
            <h1 className={styles.header}>공지 사항</h1>
            <Suspense>
                <AdminNoticesList />
            </Suspense>
        </div>
    </>;
}