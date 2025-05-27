import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public/uploadedImages", fileName);
    await writeFile(filePath, buffer);
    return NextResponse.json({ url: `/uploadedImages/${fileName}` });
}
