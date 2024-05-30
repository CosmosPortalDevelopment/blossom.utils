import type { Guild } from "discord.js";
import type { GuildChannelCountType } from "../../Types";

export async function GuildChannelCount(guild: Guild, type: GuildChannelCountType): Promise<number> {
    const channels = guild.channels.cache;

    if (type === "all") return channels.size;
    if (!Array.isArray(type)) return channels.filter((x) => x.type === type).size;

    return type.reduce((count, channel_type) => count + channels.filter((x) => x.type === channel_type).size, 0);
};