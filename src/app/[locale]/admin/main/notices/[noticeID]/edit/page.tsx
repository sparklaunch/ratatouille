"use client";

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import PostType from "@/enums/PostType";
import { useRouter } from "@/i18n/routing";
import { Notice } from "@/types/Notice";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { unzipSync } from "fflate";
import { useParams } from "next/navigation";
import path from "path";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function AdminEditNoticePage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isFixed, setIsFixed] = useState(false);
    const [createdAt, setCreatedAt] = useState<Dayjs | null>(dayjs());
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
    const { noticeID } = useParams() as { noticeID: string };
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const noticeResponse = await fetch(`/api/notice?id=${noticeID}`);
                if (noticeResponse.ok) {
                    const notice = await noticeResponse.json() as Notice;
                    setTitle(notice.title);
                    setContent(notice.content);
                    setIsFixed(notice.isFixed);
                    setCreatedAt(dayjs(notice.createdAt));
                    const filesResponse = await fetch(`/api/files?type=notice&id=${noticeID}`);
                    if (filesResponse.ok) {
                        const blob = await filesResponse.blob();
                        const arrayBuffer = await blob.arrayBuffer();
                        const uint8Array = new Uint8Array(arrayBuffer);
                        const unzippedFile = unzipSync(uint8Array);
                        const files = Object.entries(unzippedFile).map(([fileName, uint8]) => {
                            const arrayBuffer = uint8.buffer.slice(uint8.byteOffset, uint8.byteOffset + uint8.byteLength) as ArrayBuffer;
                            return new File([arrayBuffer], fileName, { type: "application/octet-stream" });
                        });
                        setAttachedFiles(files);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchNotice();
    }, [noticeID]);
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("id", noticeID);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("createdAt", createdAt?.toISOString() ?? new Date().toISOString());
        formData.append("isFixed", isFixed.toString());
        for (const attachedFile of attachedFiles) {
            formData.append("attachedFiles", attachedFile);
        }
        const matches = Array.from(content.matchAll(/<img[^>]+src="([^">]+)"/g)).map(match => match[1]);
        const usedImageNames = matches.map(match => path.basename(match));
        await fetch(`/api/images/filter?type=notice&id=${noticeID}`, {
            method: "POST",
            body: JSON.stringify({
                usedImageNames
            })
        });
        const response = await fetch("/api/notice/edit", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            const data = await response.json();
            if (data.hasSucceeded) {
                alert("공지 사항을 성공적으로 수정하였습니다.");
                router.back();
            } else {
                alert(data.errorMessage);
            }
        }
    };
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAttachedFiles(previousFiles => {
            const newFiles = Array.from(event.target.files ?? []);
            const finalFiles = [...previousFiles, ...newFiles];
            const finalFileNames = finalFiles.map(finalFile => finalFile.name);
            const finalFileNameSet = Array.from(new Set(finalFileNames));
            const uniqueFiles = finalFileNameSet.map(finalFileName => {
                return finalFiles.find(finalFile => finalFile.name === finalFileName)!;
            });
            return uniqueFiles;
        });
    };
    return <div className={styles.container}>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="제목 입력" className={styles.titleInput} required />
        <SimpleEditor content={content} onChange={setContent} postType={PostType.Notice} postID={noticeID} />
        <div className={styles.isFixedCheckBox}>
            <input type="checkbox" checked={isFixed} id="is-fixed" onChange={event => setIsFixed(event.target.checked)} />
            <label htmlFor="is-fixed">상단 고정 여부</label>
        </div>
        <div className={styles.datePicker}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <DatePicker label="작성일" value={createdAt} onChange={setCreatedAt} />
                <p>작성일을 지정하지 않을 경우, 기본값은 현재 날짜</p>
            </LocalizationProvider>
        </div>
        <div className={styles.fileUploader}>
            <label htmlFor="file-uploader">파일 첨부</label>
            <input id="file-uploader" type="file" multiple onChange={handleFileChange} />
            <ol className={styles.uploadedFiles}>
                {attachedFiles.map(attachedFile => <li key={attachedFile.name}>{attachedFile.name}</li>)}
            </ol>
        </div>
        <button onClick={handleSubmit} className={styles.submitButton}>게시</button>
    </div>;
}