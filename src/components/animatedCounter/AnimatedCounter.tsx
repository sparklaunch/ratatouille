"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import localeMapper from "../../utilities/localeMapper.json";

interface AnimatedCounterProps {
    target: number;
    isTriggered: boolean;
    duration: number;
}

export default function AnimatedCounter({ target, isTriggered, duration }: AnimatedCounterProps) {
    const [value, setValue] = useState(0);
    const locale = useLocale();
    const animationRef = useRef<number>(0);
    useEffect(() => {
        let startTime: number | null = null;
        const animate = (timeStamp: number) => {
            if (!startTime)
                startTime = timeStamp;
            const progress = Math.min((timeStamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = parseFloat((eased * target).toFixed(1));
            setValue(current);
            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };
        if (isTriggered) {
            animationRef.current = requestAnimationFrame(animate);
        } else {
            setValue(0);
            if (animationRef.current)
                cancelAnimationFrame(animationRef.current);
        }
        return () => {
            if (animationRef.current)
                cancelAnimationFrame(animationRef.current);
        };
    }, [isTriggered, target, duration]);
    return <p>{value.toLocaleString(localeMapper[locale].code, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%</p>;
}
