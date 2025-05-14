import type { Notice } from "./notice";

type NoticeData = {
    totalFixedNotices: Notice[];
    normalNotices: Notice[];
    totalNormalCount: number;
}

export type { NoticeData };
