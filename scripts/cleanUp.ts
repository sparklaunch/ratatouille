import { FileMetaData } from "@/types/FileMetaData";
import fs from "fs";
import path from "path";
import { prisma } from "../lib/prisma";
import { logger } from "./logger";

export async function cleanUp() {
    await cleanUpNotices();
}

const cleanUpNotices = async () => {
    const notices = await prisma.notice.findMany({
        select: {
            id: true,
            attachedFiles: true,
            content: true
        }
    });
    const ids = notices.map(notice => notice.id);
    const directories = fs.readdirSync("/root/uploads/notices");
    const orphanDirectories = directories.filter(directory => !ids.includes(directory));
    let count = 0;
    for (const orphanDirectory of orphanDirectories) {
        fs.rmSync(`/root/uploads/notices/${orphanDirectory}`, { recursive: true });
        count++;
    }
    if (count === 0) {
        await logger("There is no orphan directory.");
    } else {
        await logger(`Successfully deleted ${count} orphan directories.`);
    }
    count = 0;
    for (const notice of notices) {
        const { id, attachedFiles } = notice;
        const targetDirectory = `/root/uploads/notices/${id}`;
        const files = fs.readdirSync(targetDirectory);
        if ("images" in files) {
            const indexOfImages = files.indexOf("images");
            files.splice(indexOfImages, 1);
        }
        const attachments = JSON.parse(attachedFiles) as FileMetaData[];
        const attachedNames = attachments.map(attachment => attachment.name);
        const orphanAttachedFiles = files.filter(file => !attachedNames.includes(file));
        for (const orphanAttachedFile of orphanAttachedFiles) {
            fs.rmSync(`${targetDirectory}/${orphanAttachedFile}`);
            count++;
        }
        if (count === 0) {
            await logger("There is no orphan attached file.");
        } else {
            await logger(`Successfully deleted ${count} orphan attached files.`);
        }
        count = 0;
        if (fs.existsSync(`${targetDirectory}/images`)) {
            const matches = Array.from(notice.content.matchAll(/<img[^>]+src="([^">]+)"/g)).map(match => match[1]);
            const usedImageNames = matches.map(match => path.basename(match));
            const allImages = fs.readdirSync(`${targetDirectory}/images`);
            const orphanImages = allImages.filter(image => !usedImageNames.includes(image));
            for (const orphanImage of orphanImages) {
                fs.rmSync(`${targetDirectory}/images/${orphanImage}`);
                count++;
            }
            if (count === 0) {
                await logger("There is no orphan image.");
            } else {
                await logger(`Successfully deleted ${count} orphan images.`);
            }
        }
    }
};