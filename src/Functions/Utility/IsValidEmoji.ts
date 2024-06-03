/**
 * Checks if a string is a Discord or unicode emoji
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
 *         content: `Is this a Discord or unicode emoji?\nResult: ${IsValidEmoji(emoji)}`
 *     });
 * });
 * ```
 */
export function IsValidEmoji(emoji: string): boolean {
    const regex = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu;

    return regex.test(emoji);
};