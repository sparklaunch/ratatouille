import Logo from "@/../public/logos/Logo.svg";
import { createTranslation } from "@/utilities/localization/server";
import { LocaleTypes } from "@/utilities/localization/settings";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default async function Header({ params: { locale } }: {
    params: { locale: LocaleTypes }
}) {
    const { t } = await createTranslation(locale, "header");
    return <div className={styles.container}>
        <Link href="#" className={styles.keeper}>
            <span>SEED:S KEEPER</span>
        </Link>
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
                <Link href="/">
                    <Image src={Logo} alt="씨즈 로고" width={161} height={50} priority />
                </Link>
                <div className={styles.navigationContainer}>
                    <div className={styles.navigation}>
                        <div className={styles.subMenuContainer}>
                            <Link href="/brand/introduction" className={styles.menuItem}>
                                <span>{t("brand-story")}</span>
                            </Link>
                            <div className={styles.subMenuOuterContainer}>
                                <div className={styles.subMenu}>
                                    <Link href="/brand/introduction" className={styles.subMenuItem}>
                                        <span>{t("introduction")}</span>
                                    </Link>
                                    <Link href="/brand/history" className={styles.subMenuItem}>
                                        <span>{t("history")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link href="#" className={styles.menuItem}>
                            <span>{t("projects")}</span>
                        </Link>
                        <div className={styles.subMenuContainer}>
                            <Link href="/news/notice" className={styles.menuItem}>
                                <span>{t("news")}</span>
                            </Link>
                            <div className={styles.subMenuOuterContainer}>
                                <div className={styles.subMenu}>
                                    <Link href="/news/notice" className={styles.subMenuItem}>
                                        <span>{t("notices")}</span>
                                    </Link>
                                    <Link href="/news/press" className={styles.subMenuItem}>
                                        <span>{t("press")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subMenuContainer}>
                            <Link href="/communication/newsletter" className={styles.menuItem}>
                                <span>{t("communication")}</span>
                            </Link>
                            <div className={styles.subMenuOuterContainer}>
                                <div className={styles.subMenu}>
                                    <Link href="/communication/newsletter" className={styles.subMenuItem}>
                                        <span>{t("news-letters")}</span>
                                    </Link>
                                    <Link href="/communication/direction" className={styles.subMenuItem}>
                                        <span>{t("directions")}</span>
                                    </Link>
                                    <Link href="/communication/inquiry" className={styles.subMenuItem}>
                                        <span>{t("inquiry")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="#" className={styles.sponsor}>
                        <span>{t("sponsor")}</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>;
}