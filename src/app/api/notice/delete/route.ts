import fs from "fs";
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;
    const deletedNotice = await prisma.notice.delete({
        where: {
            id
        }
    });
    const targetDirectory = `/root/uploads/notices/${id}`;
    fs.rmSync(targetDirectory, {
        recursive: true
    });
    return NextResponse.json(deletedNotice);
}
