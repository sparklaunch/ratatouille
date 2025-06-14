import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function NotFoundPage() {
    const t = await getTranslations("miscellaneous");
    const locale = await getLocale();
    return <html lang={locale}>
        <body>
            <div className={styles.notFoundContainer}>
                <Image src="/images/NotFound.webp" alt={t("not-found-image-alternate")} fill />
                <h1>{t("not-found-title")}</h1>
            </div>
        </body>
    </html>;
}