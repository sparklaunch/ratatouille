import { FileMetaData } from "@/types/FileMetaData";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { v4 as uuid } from "uuid";
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
        const formData = await request.formData();
        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const createdAt = formData.get("createdAt") as Date;
        const isFixed = formData.get("isFixed") as string === "true";
        const attachedFiles = formData.getAll("attachedFiles") as File[];
        const validatedData = newNoticeSchema.parse({
            title,
            content,
            createdAt,
            isFixed
        });
        const metaData = attachedFiles.map(attachedFile => {
            return {
                name: attachedFile.name,
                size: attachedFile.size,
                type: attachedFile.type
            } as FileMetaData;
        });
        const uploadDirectory = "/root/uploads";
        const noticeID = uuid();
        const targetDirectory = join(uploadDirectory, noticeID);
        if (!fs.existsSync(targetDirectory)) {
            fs.mkdirSync(targetDirectory, { recursive: true });
        }
        for (const attachedFile of attachedFiles) {
            const arrayBuffer = await attachedFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const targetURL = join(targetDirectory, attachedFile.name);
            fs.writeFileSync(targetURL, buffer);
        }
        const newNotice = await prisma.notice.create({
            data: {
                ...validatedData,
                attachedFiles: JSON.stringify(metaData),
                id: noticeID
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