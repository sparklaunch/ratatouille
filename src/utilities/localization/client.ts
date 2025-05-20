"use client";

import i18next, { i18n } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect } from "react";
import { initReactI18next, useTranslation as useTransAlias } from "react-i18next";
import { type LocaleTypes, getOptions, locales } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language: LocaleTypes, namespace: string) => {
                return import(`./locales/${language}/${namespace}.json`);
            },
        ),
    )
    .init({
        ...getOptions(),
        lng: undefined,
        detection: {
            order: ["path"],
        },
        preload: runsOnServerSide ? locales : [],
    });

export function useTranslation(language: LocaleTypes, ns: string) {
    const translator = useTransAlias(ns);
    const { i18n } = translator;
    if (runsOnServerSide && language) {
        i18n.changeLanguage(language);
    } else {
        useCustomTranslationImplem(i18n, language);
    }
    return translator;
}

function useCustomTranslationImplem(i18n: i18n, language: LocaleTypes) {
    useEffect(() => {
        if (!language) return;
        i18n.changeLanguage(language);
    }, [language, i18n]);
}