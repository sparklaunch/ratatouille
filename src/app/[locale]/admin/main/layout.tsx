import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import PermissionDeniedPage from "@/components/permissionDeniedPage/PermissionDeniedPage";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

export default async function AdminMainLayout({ children }: { children: ReactNode }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return <PermissionDeniedPage />;
    }
    return children;
}