"use client";

import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { useState } from "react";
import styles from "./style.module.scss";

export default function AdminNewNoticeEditor() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = async () => {
        const response = await fetch("/api/admin/notices/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        if (response.ok) {
            alert("Successfully posted a notice");
        }
    };
    return <>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="제목 입력" className={styles.titleInput} />
        <SimpleEditor content={content} onChange={setContent} />
        <button onClick={handleSubmit} className={styles.submitButton}>게시</button>
    </>;
}