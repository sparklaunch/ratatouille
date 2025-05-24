import AdminHeader from "@/components/adminHeader/AdminHeader";
import { ReactNode } from "react";

export default async function AdminArticleContentLayout({ children }: { children: ReactNode }) {
    return <>
        <AdminHeader />
        {children}
    </>;
}