import PostType from "@/enums/PostType";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const postType = searchParams.get("type") as PostType;
    const id = searchParams.get("id") as string;
    const { usedImageNames } = await request.json() as { usedImageNames: string[] };
    switch (postType) {
        case PostType.Notice: {
            const targetDirectory = `/root/uploads/notices/${id}/images`;
            if (fs.existsSync(targetDirectory)) {
                const images = fs.readdirSync(targetDirectory);
                const unusedImages = images.filter(image => !usedImageNames.includes(image));
                await Promise.all(
                    unusedImages.map(async image => {
                        const fullPath = path.join(targetDirectory, image);
                        fs.unlinkSync(fullPath);
                        return NextResponse.json();
                    })
                );
            }
            break;
        }
        case PostType.PressRelease: {
            const targetDirectory = `/root/uploads/press-releases/${id}/images`;
            if (fs.existsSync(targetDirectory)) {
                const images = fs.readdirSync(targetDirectory);
                const unusedImages = images.filter(image => !usedImageNames.includes(image));
                await Promise.all(
                    unusedImages.map(async image => {
                        const fullPath = path.join(targetDirectory, image);
                        fs.unlinkSync(fullPath);
                        return NextResponse.json();
                    })
                );
            }
            break;
        }
        case PostType.NewsLetter: {
            const targetDirectory = `/root/uploads/news-letters/${id}/images`;
            if (fs.existsSync(targetDirectory)) {
                const images = fs.readdirSync(targetDirectory);
                const unusedImages = images.filter(image => !usedImageNames.includes(image));
                await Promise.all(
                    unusedImages.map(async image => {
                        const fullPath = path.join(targetDirectory, image);
                        fs.unlinkSync(fullPath);
                        return NextResponse.json();
                    })
                );
            }
            break;
        }
    }
}
