export function UriEncode(text: string): string {
    const regex = /[\x00-\x1F\x7F-\x9F"\\]/g;

    return text.replace(regex, (match) => encodeURIComponent(match));
};