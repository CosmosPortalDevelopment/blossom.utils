export function UriEncode(text: string): string {
    const char = /[\x00-\x1F\x7F-\x9F"\\]/g;

    return text.replace(char, (match) => encodeURIComponent(match));
};