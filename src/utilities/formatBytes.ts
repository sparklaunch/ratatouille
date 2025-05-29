export default function formatBytes(bytes: number): string {
    if (bytes === 0)
        return "0 Bytes";
    const kilo = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB"];
    const i = Math.floor(Math.log(bytes) / Math.log(kilo));
    const formattedBytes = parseFloat((bytes / Math.pow(kilo, i)).toFixed(0));
    return `${formattedBytes}${sizes[i]}`;
}
