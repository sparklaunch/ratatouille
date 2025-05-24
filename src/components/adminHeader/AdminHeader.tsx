import Logo from "@/../public/logos/Logo.svg";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import SignOutButton from "./SignOutButton";
import styles from "./style.module.scss";

export default async function AdminHeader() {
    return <div className={styles.container}>
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
                <Link href="/admin/main">
                    <Image src={Logo} alt="씨즈 로고" width={161} height={50} priority />
                </Link>
                <div className={styles.navigationContainer}>
                    <div className={styles.navigation}>
                        <Link href="/admin/main/notices" className={styles.menuItem}>
                            <span>공지 사항</span>
                        </Link>
                        <Link href="/admin/main/articles" className={styles.menuItem}>
                            <span>언론 보도</span>
                        </Link>
                        <Link href="/admin/main/newsletters" className={styles.menuItem}>
                            <span>뉴스레터</span>
                        </Link>
                    </div>
                    <SignOutButton />
                </div>
            </div>
        </div>
    </div>;
}