import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export async function POST(request: NextRequest) {
    const { title, content } = await request.json();
    const newNotice = await prisma.notices.create({
        data: {
            title,
            content
        }
    });
    return NextResponse.json(newNotice);
}