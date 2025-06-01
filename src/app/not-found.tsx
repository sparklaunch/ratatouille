import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function NotFoundPage() {
    const t = await getTranslations("miscellaneous");
    const locale = await getLocale();
    return <html lang={locale}>
        <body>
            <div className={styles.container}>
                <Image src="/images/NotFound.jpg" alt="Not found image" fill />
                <h1>{t("not-found")}</h1>
            </div>
        </body>
    </html>;
}