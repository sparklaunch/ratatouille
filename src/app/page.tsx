import { LocaleTypes } from "@/utilities/localization/settings";
import HomePage from "./[locale]/page";

export default async function Home({ params }: {
    params: Promise<{ locale: LocaleTypes }>
}) {
    return (
        <HomePage params={params} />
    );
}
