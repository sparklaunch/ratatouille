"use client";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";


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
            TableHeader
        ],
        content: content || "",
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        }
    });
    useEffect(() => {
        return () => {
            editor?.destroy();
        };
    }, [editor]);
    return <>
        <EditorContent editor={editor} />
    </>;
}