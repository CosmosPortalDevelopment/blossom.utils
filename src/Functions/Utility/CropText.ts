/**
 * Crops the given text if it reaches the max length
 * @param {string} text - The text to crop
 * @param {number} max_length - The maximum length the text can reach
 * @param {boolean} add_ellipsis - Adds ellipsis (...) if the max length is reached
 * 
 * @default false
 * 
 * @param {number} start_from - The lenght to start the cropping
 * 
 * @default 0
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const text = interaction.options.getString("text", true);
 *     const max_length = interaction.options.getNumber("max_length", true);
 *     const add_ellipsis = interaction.options.getBoolean("add_ellipsis", true);
 *     const start_from = interaction.options.getNumber("start_from", true);
 * 
 *     await interaction.reply({
 *         content: `Crop the given text\nMaximum Length: ${max_length}\nAdd Ellipsis?: ${add_ellipsis}\nStart From: ${start_from}\nResult: ${CropText(text, max_length, add_ellipsis, start_from)}`
 *     });
 * });
 * ```
 */
export function CropText(text: string, max_length: number, add_ellipsis: boolean = false, start_from: number = 0): string {
    if (text.length <= max_length) return text;
    if (add_ellipsis) return text.substring(start_from, max_length) + "...";

    return text.substring(start_from, max_length);
};