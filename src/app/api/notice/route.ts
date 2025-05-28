import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;
    const notice = await prisma.notice.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(notice);
}
