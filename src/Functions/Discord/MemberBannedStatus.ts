import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

export async function MemberBannedStatus(guild: Guild, user_id: Snowflake): Promise<boolean> {
    const ban_data = await guild.bans.fetch(user_id).catch((error) => { return undefined });

    return !!ban_data;
};