import PostType from "@/enums/PostType";
import AdmZip from "adm-zip";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const postType = searchParams.get("type") as PostType;
    const id = searchParams.get("id") as string;
    switch (postType) {
        case PostType.Notice: {
            const targetDirectory = `/root/uploads/notices/${id}`;
            const fileNames = fs.readdirSync(targetDirectory);
            if ("images" in fileNames) {
                const indexOfImages = fileNames.indexOf("images");
                fileNames.splice(indexOfImages, 1);
            }
            const zip = new AdmZip();
            for (const fileName of fileNames) {
                const targetFile = `/root/uploads/notices/${id}/${fileName}`;
                const buffer = fs.readFileSync(targetFile);
                zip.addFile(fileName, buffer);
            }
            const zipBuffer = zip.toBuffer();
            return new NextResponse(zipBuffer, {
                headers: {
                    "Content-Type": "application/zip"
                }
            });
        }
        case PostType.PressRelease: {

        }
        case PostType.NewsLetter: {

        }
    }
}
