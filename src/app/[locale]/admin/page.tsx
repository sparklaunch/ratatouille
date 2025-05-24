"use client";

import { useRouter } from "@/i18n/routing";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import styles from "./style.module.scss";

export default function AdminPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const response = await signIn("credentials", {
            redirect: false,
            email,
            password
        });
        if (response?.ok) {
            router.push("/admin/main");
        } else {
            alert("Failed to sign in");
        }
    };
    return <div className={styles.container}>
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>;
}