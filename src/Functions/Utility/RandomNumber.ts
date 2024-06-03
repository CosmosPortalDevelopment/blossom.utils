/**
 * Returns a random number between the two given
 * @param {number} start - The minimum number to start from
 * @param {number} end - The maximum number to end at
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const min = interaction.options.getNumber("min", true);
 *     const max = interaction.options.getNumber("max", true);
 * 
 *     await interaction.reply({
 *         content: `Random number: ${RandomNumber(min, max)}`
 *     });
 * });
 * ```
 */
export function RandomNumber(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start + 1)) + start;
};