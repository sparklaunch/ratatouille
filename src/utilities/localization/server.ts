import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, LocaleTypes } from "./settings";

const initializeI18Next = async (language: LocaleTypes, ns: string) => {
    const i18NInstance = createInstance();
    await i18NInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: typeof ns) =>
                    import(`./locales/${language}/${namespace}.json`),
            ),
        )
        .init(getOptions(language, ns));
    return i18NInstance;
};

export async function createTranslation(language: LocaleTypes, ns: string) {
    const i18nextInstance = await initializeI18Next(language, ns);
    return {
        t: i18nextInstance.getFixedT(language, Array.isArray(ns) ? ns[0] : ns),
    };
}