import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") as string);
    const article = await prisma.articles.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(article);
}
