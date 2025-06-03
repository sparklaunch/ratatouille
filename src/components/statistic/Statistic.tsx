"use client";

import { useInView } from "react-intersection-observer";
import AnimatedCounter from "../animatedCounter/AnimatedCounter";
import ProgressDonut from "../progressDonut/ProgressDonut";
import styles from "./style.module.scss";

interface StatisticProps {
    percentage: number;
    size: number;
    strokeWidth: number;
    duration: number;
};

export default function Statistic({ percentage, size, strokeWidth, duration }: StatisticProps) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0
    });
    return <div ref={ref}>
        <div className={styles.statistic}>
            <ProgressDonut percentage={percentage} isTriggered={inView} size={size} strokeWidth={strokeWidth} duration={duration} />
            <AnimatedCounter isTriggered={inView} target={percentage} duration={duration} />
        </div>
    </div>;
}
