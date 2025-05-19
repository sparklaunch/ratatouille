import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const inquiry = await prisma.inquiries.create({
        data: body
    });
    console.log(inquiry);
    return NextResponse.json({
        success: true
    });
}