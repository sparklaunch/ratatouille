"use client";

import { useEffect, useState } from "react";

function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

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
            const t = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(t);
            const current = parseFloat((eased * target).toFixed(1));
            setValue(current);
            if (t < 1)
                requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [target, duration]);
    return <p>{value.toFixed(1)}%</p>;
}
