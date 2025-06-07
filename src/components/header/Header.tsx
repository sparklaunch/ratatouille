import Logo from "@/../public/logos/Logo.svg";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SplitFlap from "../splitFlap/SplitFlap";
import LocaleSwitcher from "./LocaleSwitcher";
import styles from "./style.module.scss";

export default async function Header() {
    const signTexts = [
        "SEED:S KEEPER",
        "WE BELIEVE IN THE POWER OF SMALL SEEDS"
    ];
    const t = await getTranslations("header");
    return <div className={styles.container}>
        <Link href="#" className={styles.keeper}>
            <SplitFlap texts={signTexts} />
        </Link>
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
                <Link href="/">
                    <Image src={Logo} alt={t("logo-alternate")} width={161} height={50} priority />
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
                        <div className={styles.subMenuContainer}>
                            <Link href="/projects/innovation" className={styles.menuItem}>
                                <span>{t("projects")}</span>
                            </Link>
                            <div className={styles.subMenuOuterContainer}>
                                <div className={styles.subMenu}>
                                    <Link href="/projects/innovation" className={styles.subMenuItem}>
                                        <span>{t("social-innovation")}</span>
                                    </Link>
                                    <Link href="/projects/sustainability" className={styles.subMenuItem}>
                                        <span>{t("sustainability")}</span>
                                    </Link>
                                    <Link href="/projects/solidarity" className={styles.subMenuItem}>
                                        <span>{t("solidarity")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subMenuContainer}>
                            <Link href="/news/notices" className={styles.menuItem}>
                                <span>{t("news")}</span>
                            </Link>
                            <div className={styles.subMenuOuterContainer}>
                                <div className={styles.subMenu}>
                                    <Link href="/news/notices" className={styles.subMenuItem}>
                                        <span>{t("notices")}</span>
                                    </Link>
                                    <Link href="/news/articles" className={styles.subMenuItem}>
                                        <span>{t("articles")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subMenuContainer}>
                            <Link href="/communication/newsletters" className={styles.menuItem}>
                                <span>{t("communication")}</span>
                            </Link>
                            <div className={styles.subMenuOuterContainer}>
                                <div className={styles.subMenu}>
                                    <Link href="/communication/newsletters" className={styles.subMenuItem}>
                                        <span>{t("news-letters")}</span>
                                    </Link>
                                    <Link href="/communication/directions" className={styles.subMenuItem}>
                                        <span>{t("directions")}</span>
                                    </Link>
                                    <Link href="/communication/inquiries" className={styles.subMenuItem}>
                                        <span>{t("inquiries")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/donation/prelude" className={styles.sponsor}>
                        <span>{t("donate")}</span>
                    </Link>
                    <LocaleSwitcher />
                </div>
            </div>
        </div>
    </div>;
}