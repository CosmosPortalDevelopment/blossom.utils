export function IsValidEmoji(emoji: string): boolean {
    const regex = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu;

    return regex.test(emoji);
};