import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

export async function MemberTimeoutStatus(guild: Guild, member_id: Snowflake): Promise<boolean | undefined> {
    const member = await guild.members.fetch(member_id).catch((error) => { return undefined });
    if (!member) return undefined;

    return member.isCommunicationDisabled();
};