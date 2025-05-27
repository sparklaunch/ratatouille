import { NextResponse } from "next/server";
import path from "path";
import sharp from "sharp";

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = file.name.replace(/\.[^/.]+$/, "");
    const uploadDirectory = "/root/uploads";
    const fileName = `${Date.now()}-${originalName}.webp`;
    const filePath = path.join(uploadDirectory, fileName);
    await sharp(buffer).webp({ quality: 80 }).toFile(filePath);
    return NextResponse.json({ url: `/uploads/${fileName}` });
}
