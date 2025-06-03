"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function ProgressDonut({ percentage = 90, size = 200, strokeWidth = 20 }) {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timeOut = setTimeout(() => setProgress(percentage), 100);
        return () => clearTimeout(timeOut);
    }, [percentage]);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    return <svg width={size} height={size} className={styles.donut}>
        <circle
            stroke="#eee"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
        />
        <circle
            className={styles.donutRing}
            stroke="#FF301E"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt"
            r={radius}
            cx={size / 2}
            cy={size / 2}
        />
    </svg>;
}
