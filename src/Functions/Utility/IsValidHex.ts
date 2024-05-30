export function IsValidHex(color: string): boolean {
    const regex = /(^#[0-9A-F]{6}$)|(^[0-9A-F]{6}$)/i;

    return regex.test(color);
};