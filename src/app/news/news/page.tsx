import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function News() {
    return <div className={styles.container}>
        <Link href="#" className={styles.keeper}>
            <p>SEED:S KEEPER</p>
        </Link>
        <div className={styles.menu}>
            <Link href="#">
                <Image src="/Logo.svg" alt="씨즈 로고" width={163} height={51} />
            </Link>
            <div>
                <Link href="#" className={styles.sponsor}>
                    <p>후원하기</p>
                </Link>
            </div>
        </div>
    </div>;
}