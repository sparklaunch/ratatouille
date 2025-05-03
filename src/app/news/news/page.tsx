"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.scss";

export default function News() {
    const [isHovered, setIsHovered] = useState(false);
    function showSubMenu() {
        setIsHovered(true);
    }
    function hideSubMenu() {
        setIsHovered(false);
    }
    return <div className={styles.container}>
        <Link href="#" className={styles.keeper}>
            <p>SEED:S KEEPER</p>
        </Link>
        <div className={styles.menu}>
            <Link href="#">
                <Image src="/Logo.svg" alt="씨즈 로고" width={163} height={51} />
            </Link>
            <div className={styles.navigationContainer}>
                <div className={styles.navigation}>
                    <Link href="#" className={styles.menuItem}>
                        <p>브랜드 스토리</p>
                    </Link>
                    <Link href="#" className={styles.menuItem}>
                        <p>프로젝트</p>
                    </Link>
                    <div className={styles.subMenuContainer}>
                        <Link href="#" className={styles.menuItem} onMouseEnter={showSubMenu} onMouseLeave={hideSubMenu}>
                            <p>소식</p>
                        </Link>
                        <div className={`${styles.subMenu} ${isHovered ? styles.shown : styles.hidden}`} onMouseEnter={showSubMenu} onMouseLeave={hideSubMenu}>
                            <Link href="#" className={styles.subMenuItem}>
                                <p>공지 사항</p>
                            </Link>
                            <Link href="#" className={styles.subMenuItem}>
                                <p>언론 보도</p>
                            </Link>
                        </div>
                    </div>
                    <Link href="#" className={styles.menuItem}>
                        <p>소통</p>
                    </Link>
                </div>
                <Link href="#" className={styles.sponsor}>
                    <p>후원하기</p>
                </Link>
            </div>
        </div>
    </div>;
}