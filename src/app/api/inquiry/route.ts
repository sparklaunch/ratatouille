import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, contact, email, termsAgreed } = body;
    if (!name.trim()) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Name is required"
        });
    }
    if (!contact) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Contact is required"
        });
    }
    if (contact.length < 11) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Contact is invalid"
        });
    }
    if (!email) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Email is required"
        });
    }
    if (!/^[a-z0-9._%+-]{1,}@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/.test(email)) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Email is invalid"
        });
    }
    if (!termsAgreed) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Terms are not agreed"
        });
    }
    await prisma.inquiries.create({
        data: body
    });
    return NextResponse.json({
        hasSucceeded: true,
        message: "Inquiry accepted"
    });
}