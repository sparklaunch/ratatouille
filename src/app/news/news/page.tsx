import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function News() {
    return <div className={styles.container}>
        <Link href="#" className={styles.keeper}>
            <p>SEED:S KEEPER</p>
        </Link>
        <div className={styles.menu}>
            <Link href="#">
                <Image src="/Logo.svg" alt="씨즈 로고" />
            </Link>
        </div>
    </div>;
}