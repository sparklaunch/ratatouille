export default function formatDate(dateTime: Date | string): string {
    let date: Date;
    if (typeof dateTime === "string") {
        date = new Date(dateTime);
    } else {
        date = dateTime;
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
}