import AdminHeader from "@/components/adminHeader/AdminHeader";
import { ReactNode } from "react";

export default async function AdminNewsLetterContentLayout({ children }: { children: ReactNode }) {
    return <>
        <AdminHeader />
        {children}
    </>;
}