import AdminHeader from "@/components/adminHeader/AdminHeader";
import AdminNewNoticeEditor from "./AdminNewNoticeEditor";
import styles from "./style.module.scss";

export default async function AdminNewNoticePage() {
    return <>
        <AdminHeader />
        <div className={styles.container}>
            <h1 className={styles.header}>새 공지 사항</h1>
            <AdminNewNoticeEditor />
        </div>
    </>;
}