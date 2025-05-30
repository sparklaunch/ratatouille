"use client";

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import PostType from "@/enums/PostType";
import { useRouter } from "@/i18n/routing";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import { ChangeEvent, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import "../../../../../../styles/_keyframe-animations.css";
import "../../../../../../styles/_variables.css";
import styles from "./style.module.scss";

export default function AdminNewNoticeEditor() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createdAt, setCreatedAt] = useState<Dayjs | null>(dayjs());
    const [isFixed, setIsFixed] = useState(false);
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("createdAt", createdAt?.toISOString() ?? new Date().toISOString());
        formData.append("isFixed", isFixed.toString());
        for (const attachedFile of attachedFiles) {
            formData.append("attachedFiles", attachedFile);
        }
        const response = await fetch("/api/admin/notices/new", {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            const data = await response.json();
            if (data.hasSucceeded) {
                alert("공지 사항을 성공적으로 등록하였습니다.");
                router.push("/admin/main/notices");
            } else {
                alert(data.errorMessage);
            }
        }
    };
    const id = useMemo(() => {
        return uuid();
    }, []);
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
    return <>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="제목 입력" className={styles.titleInput} required />
        <SimpleEditor content={content} onChange={setContent} postType={PostType.Notice} postID={id} />
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
    </>;
}