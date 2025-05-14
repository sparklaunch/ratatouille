type Notice = {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    isFixed: boolean;
};

const defaultNotice: Notice = {
    id: 1,
    title: "씨즈",
    content: "This is a default notice",
    author: "Jinwook Kim",
    createdAt: new Date(),
    isFixed: false
};

export default defaultNotice;
export type { Notice };
