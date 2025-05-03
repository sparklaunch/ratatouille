import Header from "@/components/header/Header";
import styles from "./style.module.scss";

export default function Notice() {
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>소식</h1>
        </div>
    </>;
}