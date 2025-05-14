import type { Notice } from "./Notice";

type NoticeData = {
    totalFixedNotices: Notice[];
    normalNotices: Notice[];
    totalNormalCount: number;
}

export type { NoticeData };
