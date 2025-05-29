import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;
    const newsLetter = await prisma.newsLetter.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(newsLetter);
}
