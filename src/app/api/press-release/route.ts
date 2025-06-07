import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;
    const pressRelease = await prisma.pressRelease.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(pressRelease);
}
