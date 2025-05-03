import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Header() {
    return <div className={styles.container}>
        <Link href="#" className={styles.keeper}>
            <span>SEED:S KEEPER</span>
        </Link>
        <div className={styles.menu}>
            <Link href="/">
                <Image src="/Logo.svg" alt="씨즈 로고" width={163} height={51} />
            </Link>
            <div className={styles.navigationContainer}>
                <div className={styles.navigation}>
                    <Link href="#" className={styles.menuItem}>
                        <span>브랜드 스토리</span>
                    </Link>
                    <Link href="#" className={styles.menuItem}>
                        <span>프로젝트</span>
                    </Link>
                    <div className={styles.subMenuContainer}>
                        <Link href="#" className={styles.menuItem}>
                            <span>소식</span>
                        </Link>
                        <div className={styles.subMenuOuterContainer}>
                            <div className={styles.subMenu}>
                                <Link href="/news/notice" className={styles.subMenuItem}>
                                    <span>공지 사항</span>
                                </Link>
                                <Link href="#" className={styles.subMenuItem}>
                                    <span>언론 보도</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subMenuContainer}>
                        <Link href="#" className={styles.menuItem}>
                            <span>소통</span>
                        </Link>
                        <div className={styles.subMenuOuterContainer}>
                            <div className={styles.subMenu}>
                                <Link href="#" className={styles.subMenuItem}>
                                    <span>뉴스레터</span>
                                </Link>
                                <Link href="#" className={styles.subMenuItem}>
                                    <span>찾아오시는 길</span>
                                </Link>
                                <Link href="#" className={styles.subMenuItem}>
                                    <span>문의하기</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="#" className={styles.sponsor}>
                    <span>후원하기</span>
                </Link>
            </div>
        </div>
    </div>;
}