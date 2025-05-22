import { hasLocale, Locale } from "next-intl";
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let requestedLocale = await requestLocale as Locale;
    const locale = hasLocale(routing.locales, requestedLocale) ? requestedLocale : routing.defaultLocale;
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});