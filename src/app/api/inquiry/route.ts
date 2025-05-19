import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    await prisma.inquiries.create({
        data: body
    });
    return NextResponse.json({
        hasSucceeded: true
    });
}