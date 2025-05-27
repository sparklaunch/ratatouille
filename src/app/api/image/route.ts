import { NextResponse } from "next/server";
import path from "path";
import sharp from "sharp";

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = file.name.replace(/\.[^/.]+$/, "");
    const fileName = `${Date.now()}-${originalName}.webp`;
    const outputPath = path.join(process.cwd(), "public/uploadedImages", fileName);
    await sharp(buffer).webp({ quality: 80 }).toFile(outputPath);
    return NextResponse.json({ url: `/uploadedImages/${fileName}` });
}
