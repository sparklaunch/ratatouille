import { NewNotice } from "@/types/NewNotice";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod/v4";
import { prisma } from "../../../../../../lib/prisma";

const newNoticeSchema = z.object({
    title: z.string().trim().min(1),
    content: z.string(),
    createdAt: z.preprocess(value => !value ? new Date() : value, z.coerce.date()),
    isFixed: z.boolean()
});

export async function POST(request: NextRequest) {
    try {
        const data = await request.json() as NewNotice;
        const validatedData = newNoticeSchema.parse(data);
        const newNotice = await prisma.notices.create({
            data: {
                ...validatedData
            }
        });
        return NextResponse.json({
            data: newNotice,
            hasSucceeded: true,
            errorMessage: null
        });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                data: null,
                hasSucceeded: false,
                errorMessage: error.message
            });
        }
        return NextResponse.json({
            data: null,
            hasSucceeded: false,
            errorMessage: String(error)
        });
    }
}