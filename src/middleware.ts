import { fallbackLanguage, locales } from "@/utilities/localization/settings";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith(`/${fallbackLanguage}/`) || pathname === `/${fallbackLanguage}`) {
        return NextResponse.redirect(
            new URL(
                pathname.replace(
                    `/${fallbackLanguage}`,
                    pathname === `/${fallbackLanguage}` ? "/" : "",
                ),
                request.url,
            ),
        );
    }
    const pathnameIsMissingLocale = locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );
    if (pathnameIsMissingLocale) {
        return NextResponse.rewrite(
            new URL(`/${fallbackLanguage}${pathname}`, request.url),
        );
    }
}

export const config = {
    matcher: ["/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)"]
};