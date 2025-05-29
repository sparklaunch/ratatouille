import fs from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") as string;
    const id = searchParams.get("id") as string;
    const name = searchParams.get("name") as string;
    const memeType = searchParams.get("meme") as string;
    const buffer = fs.readFileSync(`/root/uploads/${type}/${id}/${name}`);
    return new NextResponse(buffer, {
        headers: {
            "Content-Disposition": `attachment; filename=${encodeURIComponent(name)}`,
            "Content-Type": memeType
        }
    });
}
