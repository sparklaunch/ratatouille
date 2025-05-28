import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") as string);
    const pageSize = 10;
    const totalFixedNotices = await prisma.notice.findMany({
        where: {
            isFixed: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    const fixedNoticesCount = totalFixedNotices.length;
    const normalPageSize = Math.max(0, pageSize - fixedNoticesCount);
    const normalNotices = await prisma.notice.findMany({
        where: {
            isFixed: false
        },
        orderBy: {
            createdAt: "desc"
        },
        skip: (page - 1) * normalPageSize,
        take: normalPageSize
    });
    const totalNormalCount = await prisma.notice.count({
        where: {
            isFixed: false
        }
    });
    return NextResponse.json({
        totalFixedNotices,
        normalNotices,
        totalNormalCount
    });
}
