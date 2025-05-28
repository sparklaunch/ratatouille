type Article = {
    id: string;
    index: number;
    title: string;
    createdAt: Date;
    content: string;
    attachedFiles?: string;
    thumbnail?: string;
}

const defaultArticle: Article = {
    id: "Sample UUID",
    index: 1,
    title: "씨즈",
    createdAt: new Date(),
    content: "This is a default article"
}

export default defaultArticle;
export type { Article };
