"use client";

import { useInView } from "react-intersection-observer";
import AnimatedCounter from "../animatedCounter/AnimatedCounter";
import ProgressDonut from "../progressDonut/ProgressDonut";
import styles from "./style.module.scss";

interface StatisticProps {
    percentage: number;
    size: number;
    strokeWidth: number;
};

export default function Statistic({ percentage, size, strokeWidth }: StatisticProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4
    });
    return <div ref={ref}>
        {inView && <div className={styles.statistic}>
            <ProgressDonut percentage={percentage} size={size} strokeWidth={strokeWidth} />
            <AnimatedCounter target={percentage} />
        </div>}
    </div>;
}
