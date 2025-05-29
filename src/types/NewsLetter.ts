type NewsLetter = {
    id: string;
    index: number;
    title: string;
    createdAt: Date;
    content: string;
    attachedFiles: string;
    thumbnail: string;
}

const defaultNewsLetter: NewsLetter = {
    id: "Sample UUID",
    index: 1,
    title: "씨즈",
    createdAt: new Date(),
    content: "This is a default newsletter",
    attachedFiles: "[]",
    thumbnail: "[]"
}

export default defaultNewsLetter;
export type { NewsLetter };
