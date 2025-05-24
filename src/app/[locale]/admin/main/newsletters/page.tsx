import AdminHeader from "@/components/adminHeader/AdminHeader";
import AdminNewsLettersList from "./AdminNewsLettersList";
import styles from "./style.module.scss";

export default async function AdminNewsLettersPage() {
    return <>
        <AdminHeader />
        <div className={styles.container}>
            <h1 className={styles.header}>뉴스레터</h1>
            <AdminNewsLettersList />
        </div>
    </>;
}