"use client";

import { useRouter } from "@/i18n/routing";
import defaultPressRelease, { PressRelease } from "@/types/PressRelease";
import formatDate from "@/utilities/formatDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function AdminPressReleaseContentPage() {
    const { pressReleaseID } = useParams() as { pressReleaseID: string };
    const router = useRouter();
    const [pressRelease, setPressRelease] = useState<PressRelease>(defaultPressRelease);
    useEffect(() => {
        const getPressRelease = async () => {
            try {
                const response = await fetch(`/api/press-release?id=${pressReleaseID}`);
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
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{pressRelease.title}</h2>
                    <h3 className={styles.createdDate}>작성일: {formatDate(pressRelease.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: pressRelease.content
                    }} />
                </div>
            </div>
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>목록 보기</p>
            </div>
        </div>
    </>;
}