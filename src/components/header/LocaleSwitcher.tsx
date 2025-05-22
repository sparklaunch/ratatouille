"use client";

import { routing, usePathname } from "@/i18n/routing";
import localeMapper from "@/utilities/localeMapper.json";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Locale, useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

export default function LocaleSwitcher() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale();
    const currentLocale = localeMapper[locale];
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    function changeLocale(nextLocale: Locale) {
        let basePath = pathname;
        for (const localeItem of routing.locales) {
            if (basePath === `/${localeItem}`) {
                basePath = "/";
            } else if (basePath.startsWith(`/${localeItem}/`)) {
                basePath = basePath.replace(`/${localeItem}`, "");
            }
        }
        const newPath = `/${nextLocale}${basePath}`;
        window.location.href = newPath;
    }
    return <div className={styles.switcherContainer} ref={containerRef}>
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
