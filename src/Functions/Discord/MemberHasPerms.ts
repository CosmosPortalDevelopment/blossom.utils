import type { Guild, PermissionResolvable } from "discord.js";

export async function MemberHasPerms(guild: Guild, memberID: string, ...perms: PermissionResolvable[]): Promise<boolean | undefined> {
    const member = await guild.members.fetch(memberID).catch((error) => { return undefined });
    if (!member) return undefined;

    const memberPerms = member.permissions;
    if (!memberPerms) return undefined;

    return memberPerms.has(perms);
};