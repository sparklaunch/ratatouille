type Article = {
    id: number;
    title: string;
    createdAt: Date;
    author: string;
    content: string;
    thumbnail?: string;
}

const defaultArticle: Article = {
    id: 1,
    title: "씨즈",
    createdAt: new Date(),
    author: "Jinwook Kim",
    content: "This is a default article"
}

export default defaultArticle;
export type { Article };
