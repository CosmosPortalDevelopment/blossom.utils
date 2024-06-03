/**
 * Checks if the given string is a hex code
 * @param {string} color - The hex code, either containing a # (#FFFFFF) or not (FFFFFF)
 * 
 * @example
 * ```
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const hex = interaction.options.getString("hex", true);
 * 
 *     await interaction.reply({
 *         content: `Is this text a hex code?\nResult: ${IsValidHex(hex)}`
 *     });
 * });
 * ```
 */
export function IsValidHex(color: string): boolean {
    const regex = /(^#[0-9A-F]{6}$)|(^[0-9A-F]{6}$)/i;

    return regex.test(color);
};