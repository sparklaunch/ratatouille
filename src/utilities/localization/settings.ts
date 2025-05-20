import type { InitOptions } from "i18next";

export const fallbackLanguage = "ko";
export const locales = [fallbackLanguage, "en"] as const;
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = "common";

export function getOptions(language = fallbackLanguage, ns = defaultNS): InitOptions {
    return {
        supportedLngs: locales,
        fallbackLng: fallbackLanguage,
        lng: language,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}