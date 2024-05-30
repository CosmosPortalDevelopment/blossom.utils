import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

export async function CompareRolePosition(guild: Guild, user_id: Snowflake, target_id: Snowflake, custom_boolean: boolean = false): Promise<boolean> {
    const member = await guild.members.fetch(user_id).catch((error) => { return undefined });
    if (!member) return custom_boolean;

    const target = await guild.members.fetch(target_id).catch((error) => { return undefined });
    if (!target) return custom_boolean;

    return guild.roles.cache.size - member.roles.highest.position < guild.roles.cache.size - target.roles.highest.position;
};