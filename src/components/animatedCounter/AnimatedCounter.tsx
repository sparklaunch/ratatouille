"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
    target: number;
    duration?: number;
}

export default function AnimatedCounter({ target, duration = 1500 }: AnimatedCounterProps) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        let start: number | null = null;
        const animate = (timeStamp: number) => {
            if (!start)
                start = timeStamp;
            const elapsed = timeStamp - start;
            const progress = Math.min(elapsed / duration, 1);
            const current = parseFloat((progress * target).toFixed(1));
            setValue(current);
            if (progress < 1)
                requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [target, duration]);
    return <h4>{value.toFixed(1)}%</h4>;
}
