"use client";

import { useRouter } from "@/i18n/routing";
import styles from "./style.module.scss";

export default function AdminPage() {
    const router = useRouter();
    const signIn = async (formData: FormData) => {
        const username = formData.get("username");
        const password = formData.get("password");
        try {
            const response = await fetch("/api/admin/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (response.ok) {
                router.push("/admin/main");
            } else {
                alert("Request failed");
            }
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert(String(error));
            }
        }
    };
    return <div className={styles.container}>
        <div className={styles.formContainer}>
            <form className={styles.form} action={signIn}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>;
}