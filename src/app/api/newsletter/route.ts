import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") as string);
    const newsLetter = await prisma.newsletters.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(newsLetter);
}
