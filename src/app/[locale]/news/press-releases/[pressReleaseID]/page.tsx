"use client";

import { useRouter } from "@/i18n/routing";
import defaultPressRelease, { PressRelease } from "@/types/PressRelease";
import formatDate from "@/utilities/formatDate";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function PressReleaseContentPage() {
    const t = useTranslations("press-release");
    const { pressReleaseID } = useParams() as { pressReleaseID: string };
    const router = useRouter();
    const [pressRelease, setPressRelease] = useState<PressRelease>(defaultPressRelease);
    useEffect(() => {
        const getPressRelease = async () => {
            try {
                const response = await fetch(`/api/article?id=${pressReleaseID}`);
                if (response.ok) {
                    const pressRelease = await response.json() as PressRelease;
                    setPressRelease(pressRelease);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getPressRelease();
    }, [pressReleaseID]);
    return <>
        <div className={styles.container}>
            <h1 className={styles.header}>{t("news")}</h1>
            <div className={styles.subheader}>
                <Link href="/news/notices">
                    <span>{t("notices")}</span>
                </Link>
                <Link href="/news/press-releases">
                    <span className={styles.activeSubheader}>{t("press-releases")}</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{pressRelease.title}</h2>
                    <h3 className={styles.createdDate}>{t("date")}: {formatDate(pressRelease.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: pressRelease.content
                    }} />
                </div>
            </div>
            <div className={styles.appendix}>
                <Image src="/icons/Share.svg" alt={t("share-alternate")} width={24} height={24} />
                <Image src="/icons/Print.svg" alt={t("print-alternate")} width={24} height={24} onClick={() => window.print()} />
            </div>
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>{t("go-back")}</p>
            </div>
        </div>
    </>;
}