import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a channel exits in a guild
 * @param {Guild} guild - The guild class to check for the channel
 * @param {Snowflake} channel_id - The ID of the channel to check
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const channel_id = interaction.options.getString("channel_id", true);
 * 
 *     await interaction.reply({
 *         content: `Does channel exist in this server?\nResult: ${GuildChannelExist(interaction.guild, channel_id)}`
 *     });
 * });
 * ```
 */
export async function GuildChannelExist(guild: Guild, channel_id: Snowflake): Promise<boolean> {
    const channel = await guild.channels.fetch(channel_id).catch((error) => { return undefined });

    return !!channel;
};