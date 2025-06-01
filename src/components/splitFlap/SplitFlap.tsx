"use client";

import localFont from "next/font/local";
import { useEffect, useMemo, useState } from "react";
import styles from "./style.module.scss";

const characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789:";
const transitionTime = 3000;
const switchInterval = 8000;

const sleep = (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const sfMono = localFont({
	src: "../../fonts/SFMono.otf",
	display: "swap",
	variable: "--font-sfmono"
});

export default function SplitFlap({ texts }: { texts: string[] }) {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [slots, setSlots] = useState<string[]>([]);
	const [target, setTarget] = useState<string>("");
	const maxLength = useMemo(() => {
		return texts.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue.length), 0);
	}, [texts]);
	const paddedTarget = useMemo(() => {
		const rawText = texts[currentTextIndex].toUpperCase();
		const padLength = maxLength - rawText.length;
		const leftPad = Math.floor(padLength / 2);
		const rightPad = padLength - leftPad;
		return `${" ".repeat(leftPad)}${rawText}${" ".repeat(rightPad)}`;
	}, [texts, currentTextIndex, maxLength]);
	useEffect(() => {
		setTarget(paddedTarget);
	}, [paddedTarget]);
	useEffect(() => {
		let isCancelled = false;
		const animate = async () => {
			const characters = target.split("");
			const gapTime = transitionTime / characters.length;
			setSlots((previousSlots) => {
				const copy = Array.from({ length: maxLength }, (_, i) => previousSlots[i] ?? " ");
				return copy;
			});
			for (let i = 0; i < characters.length; i++) {
				const targetCharacter = characters[i];
				const index = i;
				await sleep(gapTime);
				let j = 0;
				const interval = 30;
				const spin = async () => {
					if (isCancelled) return;
					const nextCharacter = characterSet[j % characterSet.length];
					setSlots((previousSlots) => {
						const copy = [...previousSlots];
						copy[index] = nextCharacter;
						return copy;
					});
					if (nextCharacter === targetCharacter) return;
					j++;
					await sleep(interval);
					spin();
				};
				spin();
			}
		};
		if (target)
			animate();
		return () => {
			isCancelled = true;
		};
	}, [target, maxLength]);
	useEffect(() => {
		const intervalID = setInterval(() => {
			setCurrentTextIndex((previousTextIndex) => (previousTextIndex + 1) % texts.length);
		}, switchInterval);
		return () => clearInterval(intervalID);
	}, [texts]);
	return <div className={`${styles.container} ${sfMono.className}`}>
		{slots.map((character, index) => (
			<div key={index} className={styles.slotContainer}>
				<div className={styles.slot}>
					<span>{character}</span>
				</div>
			</div>
		))}
	</div>;
}
