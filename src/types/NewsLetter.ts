type NewsLetter = {
    id: number;
    title: string;
    createdAt: Date;
    author: string;
    content: string;
    thumbnail?: string;
}

const defaultNewsLetter: NewsLetter = {
    id: 1,
    title: "씨즈",
    createdAt: new Date(),
    author: "Jinwook Kim",
    content: "This is a default newsletter"
}

export default defaultNewsLetter;
export type { NewsLetter };
