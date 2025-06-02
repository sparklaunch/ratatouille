"use client";

import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./style.module.scss";

export default function LanguageNotSupportedPage() {
    const router = useRouter();
    const t = useTranslations("miscellaneous");
    return <div className={styles.container}>
        <Image src="/images/LanguageNotSupported.png" alt={t("language-not-supported-image-alternate")} fill />
        <h1>Language not supported</h1>
        <h2>{t("language-not-supported")}</h2>
        <button onClick={() => router.back()}>{t("go-back")}</button>
    </div>;
}