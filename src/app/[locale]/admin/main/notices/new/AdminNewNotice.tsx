"use client";

import { useState } from "react";
import AdminNewNoticeEditor from "./AdminNewNoticeEditor";
import styles from "./style.module.scss";

export default function AdminNewNotice() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = async () => {
        console.log("Handled submit");
    };
    return <>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="제목 입력" className={styles.titleInput} />
        <AdminNewNoticeEditor content={content} onChange={setContent} />
        <button onClick={handleSubmit}>게시</button>
    </>;
}