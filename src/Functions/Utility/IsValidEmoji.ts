export function IsValidEmoji(emoji: string): boolean {
    const regex = /^[\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{23E9}-\u{23F3}\u{1F900}-\u{1F9FF}\u{1F1E6}-\u{1F1FF}]$/u;

    return regex.test(emoji);
};