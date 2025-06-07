type PressRelease = {
    id: string;
    index: number;
    title: string;
    createdAt: Date;
    content: string;
    attachedFiles: string;
    thumbnail: string;
}

const defaultPressRelease: PressRelease = {
    id: "Sample UUID",
    index: 1,
    title: "씨즈",
    createdAt: new Date(),
    content: "This is a default press release",
    attachedFiles: "[]",
    thumbnail: "[]"
}

export default defaultPressRelease;
export type { PressRelease };
