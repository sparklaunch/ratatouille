"use client";

import { Link, useRouter } from "@/i18n/routing";
import { FileMetaData } from "@/types/FileMetaData";
import defaultNotice, { Notice } from "@/types/Notice";
import formatBytes from "@/utilities/formatBytes";
import formatDate from "@/utilities/formatDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function AdminNoticeContentPage() {
    const { noticeID } = useParams() as { noticeID: string };
    const router = useRouter();
    const [notice, setNotice] = useState<Notice>(defaultNotice);
    const [metaData, setMetaData] = useState<FileMetaData[]>([]);
    useEffect(() => {
        const getNotice = async () => {
            try {
                const response = await fetch(`/api/notice?id=${noticeID}`);
                if (response.ok) {
                    const notice = await response.json() as Notice;
                    const attachedFiles = JSON.parse(notice.attachedFiles) as FileMetaData[];
                    setMetaData(attachedFiles);
                    setNotice(notice);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getNotice();
    }, [noticeID]);
    const handleDelete = async () => {
        const response = await fetch(`/api/notice/delete?id=${noticeID}`, {
            method: "POST"
        });
        if (response.ok) {
            router.back();
        }
    };
    return <>
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{notice.title}</h2>
                    <h3 className={styles.createdDate}>작성일: {formatDate(notice.createdAt)}</h3>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{
                        __html: notice.content
                    }} />
                </div>
            </div>
            {metaData.length > 0 && <div className={styles.attachedFiles}>
                <h4 className={styles.attachedFilesHeader}>첨부 파일</h4>
                <ol className={styles.attachedFileList}>
                    {metaData.map(meta => <li key={meta.name}>
                        <Link href={`/api/file?type=notices&id=${notice.id}&name=${meta.name}&meme=${meta.type}`}>{meta.name} - {formatBytes(meta.size)}</Link>
                    </li>)}
                </ol>
            </div>}
            <div className={styles.miscellaneous}>
                <p onClick={handleDelete}>삭제</p>
                <p>수정</p>
            </div>
            <div className={styles.goBackToListButton}>
                <p onClick={() => router.back()}>목록 보기</p>
            </div>
        </div>
    </>;
}