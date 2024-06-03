import type { Client } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a channel exists
 * @param {Client<boolean>} client - Your client class to check for the channel
 * @param {Snowflake} channel_id - The ID of the channel to check
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async (interaction: ChatInputCommandInteraction) => {
 *     const channel_id = interaction.options.getString("channel_id", true);
 * 
 *     await interaction.reply({
 *         content: `Does channel exist?\nResult: ${ChannelExist(client, channel_id)}`
 *     });
 * });
 * ```
 */
export async function ChannelExist(client: Client<boolean>, channel_id: Snowflake): Promise<boolean> {
    const channel = await client.channels.fetch(channel_id).catch((error) => { return undefined });

    return !!channel;
};