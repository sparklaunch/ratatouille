"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import localeMapper from "@/utilities/localeMapper.json";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Locale, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.scss";

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    function changeLocale(nextLocale: Locale) {
        let basePath = pathname;
        for (const localeItem of routing.locales) {
            if (basePath === `/${localeItem}`) {
                basePath = "/";
            } else if (basePath.startsWith(`/${localeItem}/`)) {
                basePath = basePath.replace(`/${localeItem}`, "");
            }
        }
        router.push(basePath || "/", { locale: nextLocale });
    }
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const currentLocale = localeMapper[locale];
    return <div className={styles.switcherContainer}>
        <div className={styles.togglerContainer} onClick={() => setIsOpen(!isOpen)}>
            <Image src={`/flags/${locale}.svg`} alt={currentLocale.flag} width={30} height={20} className={styles.flagImage} />
            {isOpen ? <ArrowDropDownIcon style={{ color: "#FF301E" }} fontSize="large" /> : <ArrowDropUpIcon style={{ color: "#FF301E" }} fontSize="large" />}
        </div>
        {isOpen && <div className={styles.panelContainer}>
            {routing.locales.map(availableLocale => <div className={styles.locale} key={availableLocale} onClick={() => changeLocale(availableLocale)}>
                <Image src={`/flags/${availableLocale}.svg`} alt={localeMapper[availableLocale].flag} width={30} height={20} className={styles.flagImage} />
                <p>{localeMapper[availableLocale].language}</p>
            </div>)}
        </div>}
    </div>;
}
