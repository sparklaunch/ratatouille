import type { Notice } from "./notice";

type Notices = {
    normalNotices: Notice[];
    fixedNotices: Notice[];
}

const defaultNotices: Notices = {
    normalNotices: [],
    fixedNotices: []
}

export default defaultNotices;
export type { Notices };
