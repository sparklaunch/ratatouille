import AdminHeader from "@/components/adminHeader/AdminHeader";
import AdminArticlesList from "./AdminArticlesList";
import styles from "./style.module.scss";

export default async function AdminArticlesPage() {
    return <>
        <AdminHeader />
        <div className={styles.container}>
            <h1 className={styles.header}>언론 보도</h1>
            <AdminArticlesList />
        </div>
    </>;
}