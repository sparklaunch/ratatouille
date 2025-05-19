import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const {
        name,
        affiliation,
        contact,
        email,
        other,
        termsAgreed
    } = body;
    console.log("API got data", {
        ...body
    });
    const inquiry = await prisma.inquiries.create({
        data: {
            name,
            affiliation,
            contact,
            email,
            other,
            termsAgreed
        }
    });
    console.log(inquiry);
    return NextResponse.json({
        success: true
    });
}