import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") as string);
    const pageSize = 12;
    const newsLetters = await prisma.newsletters.findMany({
        orderBy: {
            createdAt: "desc"
        },
        skip: (page - 1) * pageSize,
        take: pageSize
    });
    const totalCount = await prisma.newsletters.count();
    return NextResponse.json({
        newsLetters,
        totalCount
    });
}
