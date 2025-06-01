"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ: ";
const transitionTime = 3000;

const sleep = (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const sfMono = localFont({
	src: "../../fonts/SFMono.otf",
	display: "swap",
	variable: "--font-sfmono"
});

export default function SplitFlap({ children }: { children: string }) {
	const text = children.toUpperCase();
	const characters = text.split("");
	const [slots, setSlots] = useState<string[]>(Array(text.length).fill(" "));
	useEffect(() => {
		let isCancelled = false;
		const gapTime = transitionTime / characters.length;
		const animate = async () => {
			for (let i = 0; i < characters.length; i++) {
				const targetCharacter = characters[i];
				const index = i;
				await sleep(gapTime);
				let j = 0;
				const interval = 30;
				const spin = async () => {
					if (isCancelled)
						return;
					const nextCharacter = characterSet[j % characterSet.length];
					setSlots((previousSlots) => {
						const copy = [...previousSlots];
						copy[index] = nextCharacter;
						return copy;
					});
					if (nextCharacter === targetCharacter)
						return;
					j++;
					await sleep(interval);
					spin();
				};
				spin();
			}
		};
		animate();
		return () => {
			isCancelled = true;
		};
	}, [children]);
	return (
		<div className={`${styles.container} ${sfMono.className}`}>
			{slots.map((character, index) => <div key={index} className={styles.slotContainer}>
				<div className={styles.slot}>
					<span>{character}</span>
				</div>
			</div>)}
		</div>
	);
}
