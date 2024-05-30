export function IsValidUnicodeEmoji(emoji: string): boolean {
    const regex = /\p{Extended_Pictographic}/gu;

    return regex.test(emoji);
};