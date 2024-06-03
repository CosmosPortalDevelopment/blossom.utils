/**
 * Checks if a string is an unicode emoji
 * @param {string} emoji - The string to check if it's an emoji
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const emoji = interaction.options.getString("emoji", true);
 * 
 *     await interaction.reply({
 *         content: `Is this an unicode emoji?\nResult: ${IsValidUnicodeEmoji(emoji)}`
 *     });
 * });
 * ```
 */
export function IsValidUnicodeEmoji(emoji: string): boolean {
    const regex = /\p{Extended_Pictographic}/gu;

    return regex.test(emoji);
};