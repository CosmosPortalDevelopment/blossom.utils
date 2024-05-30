export function IsValidDiscordEmoji(emoji: string): boolean {
    const regex = /<a?:.+?:\d{18}>/gu;

    return regex.test(emoji);
};