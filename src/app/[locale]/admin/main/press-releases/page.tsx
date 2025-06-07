import AdminHeader from "@/components/adminHeader/AdminHeader";
import AdminPressReleaseList from "./AdminPressReleaseList";
import styles from "./style.module.scss";

export default async function AdminPressReleasesPage() {
    return <>
        <AdminHeader />
        <div className={styles.container}>
            <h1 className={styles.header}>언론 보도</h1>
            <AdminPressReleaseList />
        </div>
    </>;
}