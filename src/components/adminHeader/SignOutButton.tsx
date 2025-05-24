"use client";

import { useRouter } from "@/i18n/routing";
import { signOut } from "next-auth/react";
import { MouseEvent } from "react";
import styles from "./style.module.scss";

export default function SignOutButton() {
    const router = useRouter();
    const handleSignOut = (event: MouseEvent) => {
        event.preventDefault();
        signOut({
            redirect: false
        });
        router.push("/admin");
    };
    return <button className={styles.signOutButton} onClick={handleSignOut}>로그아웃</button>;
}