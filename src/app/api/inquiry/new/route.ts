import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";
import { prisma } from "../../../../../lib/prisma";

const inquirySchema = z.object({
    name: z.string().trim().min(1).max(100),
    affiliation: z.string().max(100),
    contact: z.string().trim().regex(/^\d{2,3}-\d{3,4}-\d{4}$/),
    email: z.string().trim().regex(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
    other: z.string(),
    termsAgreed: z.literal(true)
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        inquirySchema.parse(body);
        await prisma.inquiry.create({
            data: body
        });
        return NextResponse.json({
            hasSucceeded: true,
            message: "Inquiry accepted"
        });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                hasSucceeded: false,
                message: error.message
            });
        }
        return NextResponse.json({
            hasSucceeded: false,
            message: String(error)
        });
    }
}