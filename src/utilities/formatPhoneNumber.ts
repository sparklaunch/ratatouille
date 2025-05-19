export default function formatPhoneNumber(input: string): string {
    const numbers = input.replace(/\D/g, "");
    let formatted = "";
    if (numbers.startsWith("02")) {
        if (numbers.length < 3) {
            formatted = numbers;
        } else if (numbers.length < 7) {
            formatted = "02-" + numbers.slice(2);
        } else if (numbers.length < 10) {
            formatted = "02-" + numbers.slice(2, 5) + "-" + numbers.slice(5);
        } else {
            formatted = "02-" + numbers.slice(2, 6) + "-" + numbers.slice(6, 10);
        }
    } else {
        if (numbers.length < 4) {
            formatted = numbers;
        } else if (numbers.length < 7) {
            formatted = numbers.slice(0, 3) + "-" + numbers.slice(3);
        } else if (numbers.length < 11) {
            formatted = numbers.slice(0, 3) + "-" + numbers.slice(3, 6) + "-" + numbers.slice(6);
        } else {
            formatted = numbers.slice(0, 3) + "-" + numbers.slice(3, 7) + "-" + numbers.slice(7, 11);
        }
    }
    return formatted;
}