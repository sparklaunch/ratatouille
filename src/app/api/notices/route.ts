import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (token !== process.env.API_SECRET_KEY) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const notices = await prisma.notices.findMany({
        orderBy: { created_at: "desc" },
        take: 100,
    });

    return NextResponse.json(notices);
}
