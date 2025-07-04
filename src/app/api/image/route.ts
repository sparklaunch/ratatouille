import PostType from "@/enums/PostType";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
import sharp from "sharp";
import { v4 as uuid } from "uuid";

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const postType = searchParams.get("type") as PostType;
    const id = searchParams.get("id") as string;
    const formData = await request.formData();
    const image = formData.get("image") as File;
    const buffer = Buffer.from(await image.arrayBuffer());
    const uploadDirectory = "/root/uploads";
    const fileName = `${uuid()}.webp`;
    switch (postType) {
        case PostType.Notice: {
            const targetDirectory = path.join(uploadDirectory, "notices", id, "images");
            if (!fs.existsSync(targetDirectory)) {
                fs.mkdirSync(targetDirectory, { recursive: true });
            }
            const filePath = path.join(uploadDirectory, "notices", id, "images", fileName);
            const uploadedPath = path.join("/uploads/notices", id, "images", fileName);
            await sharp(buffer).webp({ quality: 80 }).toFile(filePath);
            return NextResponse.json({ url: uploadedPath });
        }
        case PostType.PressRelease: {
            const targetDirectory = path.join(uploadDirectory, "press-releases", id, "images");
            if (!fs.existsSync(targetDirectory)) {
                fs.mkdirSync(targetDirectory, { recursive: true });
            }
            const filePath = path.join(uploadDirectory, "press-releases", id, "images", fileName);
            const uploadedPath = path.join("/uploads/press-releases", id, "images", fileName);
            await sharp(buffer).webp({ quality: 80 }).toFile(filePath);
            return NextResponse.json({ url: uploadedPath });
        }
        case PostType.NewsLetter: {
            const targetDirectory = path.join(uploadDirectory, "news-letters", id, "images");
            if (!fs.existsSync(targetDirectory)) {
                fs.mkdirSync(targetDirectory, { recursive: true });
            }
            const filePath = path.join(uploadDirectory, "news-letters", id, "images", fileName);
            const uploadedPath = path.join("/uploads/news-letters", id, "images", fileName);
            await sharp(buffer).webp({ quality: 80 }).toFile(filePath);
            return NextResponse.json({ url: uploadedPath });
        }
    }
}
