import fs from "fs/promises";
import path from "path";

const logFile = path.join("/root/logs", "cleanup.log");

export default async function logger(message: string) {
    const timeStamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    const line = `[${timeStamp}] ${message}\n`;
    await fs.mkdir(path.dirname(logFile), { recursive: true });
    await fs.appendFile(logFile, line, "utf-8");
}
