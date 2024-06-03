/**
 * Encodes the text as a valid component of URI, it will only encodes special characters
 * @param {string} text - The text to encode
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const text = interaction.options.getString("text", true);
 * 
 *     await interaction.reply({
 *         content: `Encoded text result: ${UriEncode(text)}`
 *     });
 * });
 * ```
 */
export function UriEncode(text: string): string {
    const regex = /[\x00-\x1F\x7F-\x9F"\\]/g;

    return text.replace(regex, (match) => encodeURIComponent(match));
};