import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, contact, email, applicationDate, visitDateTime, headCount, purposeOfFieldTrip, purposeOfListening, termsAgreed } = body;
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
    if (!applicationDate) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Application date is required"
        });
    }
    if (!visitDateTime) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Visit datetime is required"
        });
    }
    if (headCount <= 0) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Head count cannot be fewer than 1"
        });
    }
    if (!purposeOfFieldTrip) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Purpose of field trip required"
        });
    }
    if (!purposeOfListening) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Purpose of listening is required"
        });
    }
    if (!termsAgreed) {
        return NextResponse.json({
            hasSucceeded: false,
            message: "Terms are not agreed"
        });
    }
    await prisma.visits.create({
        data: body
    });
    return NextResponse.json({
        hasSucceeded: true,
        message: "Visit accepted"
    });
}