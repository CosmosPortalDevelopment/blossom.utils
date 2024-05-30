import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

export async function GuildChannelExist(guild: Guild, channel_id: Snowflake): Promise<boolean> {
    const channel = await guild.channels.fetch(channel_id).catch((error) => { return undefined });

    return !!channel;
};