"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useTranslations } from "use-intl";
import styles from "./style.module.scss";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    const locale = useLocale();
    const t = useTranslations("miscellaneous");
    return <html lang={locale}>
        <body>
            <div className={styles.errorContainer}>
                <Image src="/images/Error.jpg" alt={t("error-image-alternate")} fill />
                <h1>{t("error-title")}</h1>
                <p>{error.message}</p>
                <button onClick={reset}>{t("retry")}</button>
            </div>
        </body>
    </html>;
}