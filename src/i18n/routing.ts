import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["ko", "en", "ja", "es", "fr"],
    defaultLocale: "ko",
    localePrefix: "as-needed"
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);