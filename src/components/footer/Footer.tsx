import Logo from "@/../public/logos/Logo.svg";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function Footer() {
    const t = await getTranslations("footer");
    return <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
            <Image src={Logo} width={161} height={50} alt={t("logo-alternate")} priority />
            <div className={styles.rightContainer}>
                <h2 className={styles.header}>We Believe in The Power of Small SEED:S</h2>
                <div className={styles.gridContainer}>
                    <div className={styles.information}>
                        <h3>Company info</h3>
                        <p>{t("owner")}</p>
                        <p>{t("tax-id")}</p>
                        <p>{t("address")}</p>
                    </div>
                    <div className={styles.conversation}>
                        <h3>Start a conversation</h3>
                        <p>seeds@theseeds.asia</p>
                        <p>+82.2.355.7911</p>
                        <p>02-355-7910</p>
                        <p>010-3442-7901</p>
                    </div>
                    <div className={styles.socialMedia}>
                        <h3>Follow us on</h3>
                        <div className={styles.socialMediaLogos}>
                            <Link href="#">
                                <Image src="/logos/FacebookLogo.svg" alt={t("facebook-alternate")} width={10} height={20} />
                            </Link>
                            <Link href="#">
                                <Image src="/logos/XLogo.svg" alt={t("x-alternate")} width={20} height={20} />
                            </Link>
                            <Link href="#">
                                <Image src="/logos/InstagramLogo.svg" alt={t("instagram-alternate")} width={20} height={20} />
                            </Link>
                            <Link href="#">
                                <Image src="/logos/YouTubeLogo.svg" alt={t("youtube-alternate")} width={28} height={20} />
                            </Link>
                        </div>
                    </div>
                    <Link href="#" className={styles.bottomLink}>
                        <span>{t("introduction")}</span>
                    </Link>
                    <Link href="#" className={styles.bottomLink}>
                        <span>{t("visit-information")}</span>
                    </Link>
                    <p className={styles.copyright}>&copy; 2025 SEED:S All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
}