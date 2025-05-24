import Logo from "@/../public/logos/Logo.svg";
import { Link } from "@/i18n/routing";
import Image from "next/image";
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
                        <div className={styles.subMenuContainer}>
                            <Link href="/brand/introduction" className={styles.menuItem}>
                                <span>브랜드 스토리</span>
                            </Link>
                            <div className={styles.subMenuOuterContainer}>
                                <div className={styles.subMenu}>
                                    <Link href="/brand/introduction" className={styles.subMenuItem}>
                                        <span>소개</span>
                                    </Link>
                                    <Link href="/brand/history" className={styles.subMenuItem}>
                                        <span>연혁</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="#" className={styles.menuItem}>
                            <span>프로젝트</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}