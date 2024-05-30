import type { Guild, PermissionResolvable } from "discord.js";
import type { Snowflake } from "../../Types";

export async function MemberHasPermissions(guild: Guild, member_id: Snowflake, permissions: PermissionResolvable[]): Promise<boolean | undefined> {
    const member = await guild.members.fetch(member_id).catch((error) => { return undefined });
    if (!member) return undefined;

    const member_permissions = member.permissions;
    if (!member_permissions) return undefined;

    return member_permissions.has(permissions);
};