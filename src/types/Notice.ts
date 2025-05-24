type Notice = {
    id: string;
    index: number;
    title: string;
    content: string;
    createdAt: Date;
    isFixed: boolean;
};

const defaultNotice: Notice = {
    id: "Sample UUID",
    index: 1,
    title: "씨즈",
    content: "This is a default notice",
    createdAt: new Date(),
    isFixed: false
};

export default defaultNotice;
export type { Notice };
