import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    // const token = searchParams.get("token");
    // if (token !== process.env.API_SECRET_KEY) {
    //     return new NextResponse("Unauthorized", {
    //         status: 401
    //     });
    // }
    if (searchParams.get("page")) {
        const page = parseInt(searchParams.get("page") as string) || 1;
        const fixedNotices = await prisma.notices.findMany({
            where: { is_fixed: true },
            orderBy: { created_at: "desc" },
        });
        const [normalNotices, totalCount] = await Promise.all([
            prisma.notices.findMany({
                where: { is_fixed: false },
                orderBy: { created_at: "desc" },
                skip: (page - 1) * 10,
                take: 10
            }),
            prisma.notices.count({
                where: { is_fixed: false }
            })
        ]);
        return NextResponse.json({
            fixedNotices,
            normalNotices,
            totalCount
        });
    }
    const notices = await prisma.notices.findMany({
        orderBy: {
            created_at: "desc"
        },
        take: 100,
    });
    return NextResponse.json(notices);
}
