"use client";

import { useEffect, useRef, useState } from "react";

interface ProgressDonutProps {
    percentage: number;
    isTriggered: boolean;
    size?: number;
    strokeWidth?: number;
    duration: number;
}

export default function ProgressDonut({
    percentage,
    isTriggered,
    size = 200,
    strokeWidth = 20,
    duration
}: ProgressDonutProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const [animatedPercent, setAnimatedPercent] = useState(0);
    const animationRef = useRef<number>(0);
    useEffect(() => {
        let startTime: number | null = null;
        const animate = (timeStamp: number) => {
            if (!startTime)
                startTime = timeStamp;
            const progress = Math.min((timeStamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = parseFloat((eased * percentage).toFixed(1));
            setAnimatedPercent(current);
            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };
        if (isTriggered) {
            animationRef.current = requestAnimationFrame(animate);
        } else {
            setAnimatedPercent(0);
            if (animationRef.current)
                cancelAnimationFrame(animationRef.current);
        }
        return () => {
            if (animationRef.current)
                cancelAnimationFrame(animationRef.current);
        };
    }, [isTriggered, percentage, duration]);
    const dashOffset = circumference - (animatedPercent / 100) * circumference;
    return <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
            stroke="#eee"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
        />
        <circle
            stroke="#FF301E"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="butt"
            r={radius}
            cx={size / 2}
            cy={size / 2}
        />
    </svg>;
}
