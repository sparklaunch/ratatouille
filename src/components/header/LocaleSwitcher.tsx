"use client";

import localeMapper from "@/utilities/localeMapper.json";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Locale, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.scss";

const availableLocales: Locale[] = ["ko", "en", "ja"];

export default function LocaleSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const currentLocale = localeMapper[locale];
    return <div className={styles.switcherContainer}>
        <div className={styles.togglerContainer} onClick={() => setIsOpen(!isOpen)}>
            <Image src={`/flags/${locale}.svg`} alt={currentLocale.flag} width={30} height={20} className={styles.flagImage} />
            {isOpen ? <ArrowDropDownIcon style={{ color: "#FF301E" }} fontSize="large" /> : <ArrowDropUpIcon style={{ color: "#FF301E" }} fontSize="large" />}
        </div>
        {isOpen && <div className={styles.panelContainer}>
            {availableLocales.map(availableLocale => <div className={styles.locale} key={availableLocale}>
                <Image src={`/flags/${availableLocale}.svg`} alt={localeMapper[availableLocale].flag} width={30} height={20} className={styles.flagImage} />
                <p>{localeMapper[availableLocale].language}</p>
            </div>)}
        </div>}
    </div>;
}
