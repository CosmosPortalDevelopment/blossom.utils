/**
 * Checks if a string is a Discord emoji
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
 *         content: `Is this a Discord emoji?\nResult: ${IsValidDiscordEmoji(emoji)}`
 *     });
 * });
 * ```
 */
export function IsValidDiscordEmoji(emoji: string): boolean {
    const regex = /<a?:.+?:\d{18}>/gu;

    return regex.test(emoji);
};