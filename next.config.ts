import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    rewrites: async () => {
        return [
            {
                source: "/uploads/:path*",
                destination: "http://145.79.10.196:8080/uploads/:path*"
            }
        ];
    }
};

export default withNextIntl(nextConfig);
