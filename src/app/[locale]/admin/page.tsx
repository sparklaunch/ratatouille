"use client";

import styles from "./style.module.scss";

export default function AdminPage() {
    return <div className={styles.container}>
        <div className={styles.formContainer}>
            <form className={styles.form} >
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>;
}