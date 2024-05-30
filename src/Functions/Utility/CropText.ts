export function CropText(text: string, max_length: number, add_ellipsis: boolean = false, start: number = 0): string {
    if (text.length <= max_length) return text;
    if (add_ellipsis) return text.substring(start, max_length) + "...";

    return text.substring(start, max_length);
};