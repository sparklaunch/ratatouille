"use client";

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import styles from "./style.module.scss";

export default function AdminNewNoticeEditor({ content, onChange }: { content: string, onChange: (html: string) => void }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link,
            Table.configure({
                resizable: true
            }),
            TableRow,
            TableCell,
            TableHeader,
            Underline
        ],
        content: content || "",
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        }
    });
    useEffect(() => {
        if (editor) {
            return () => {
                editor.destroy();
            };
        }
    }, [editor]);
    if (!editor) {
        return <p>에디터 로딩 중...</p>;
    }
    return <>
        <div className={styles.toolBar}>
            <button onClick={() => editor.chain().focus().toggleBold().run()}>
                <FormatBoldIcon />
            </button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()}>
                <FormatItalicIcon />
            </button>
            <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
                <FormatUnderlinedIcon />
            </button>
        </div>
        <EditorContent editor={editor} className={styles.editor} />
    </>;
}