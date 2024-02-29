export function CropText(text: string, maxLength: number, addEllipsis: boolean = false): string {
    if (text.length <= maxLength) return text;
    if (addEllipsis) return text.substring(0, maxLength) + "...";

    return text.substring(0, maxLength);
};