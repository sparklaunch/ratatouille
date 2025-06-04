import { RichTranslationValues } from "next-intl";

export function richFormatter(values: string[] = ["br"]): RichTranslationValues {
    const map: RichTranslationValues = {};
    values.forEach(tag => {
        switch (tag) {
            case "br":
                map[tag] = () => <br />;
                break;
            case "strong":
                map[tag] = (chunks) => <strong>{chunks}</strong>;
                break;
            case "em":
                map[tag] = (chunks) => <em>{chunks}</em>;
                break;
        }
    });
    return map;
}
