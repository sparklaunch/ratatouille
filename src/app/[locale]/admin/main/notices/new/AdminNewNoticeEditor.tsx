"use client";

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { useRouter } from "@/i18n/routing";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import { useState } from "react";
import "../../../../../../styles/_keyframe-animations.css";
import "../../../../../../styles/_variables.css";
import styles from "./style.module.scss";

export default function AdminNewNoticeEditor() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createdAt, setCreatedAt] = useState<Dayjs | null>(dayjs());
    const [isFixed, setIsFixed] = useState(false);
    const handleSubmit = async () => {
        const response = await fetch("/api/admin/notices/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content,
                createdAt,
                isFixed
            })
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
    return <>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="제목 입력" className={styles.titleInput} required />
        <SimpleEditor content={content} onChange={setContent} />
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
        <button onClick={handleSubmit} className={styles.submitButton}>게시</button>
    </>;
}