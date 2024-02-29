import type { Client, GuildChannel, PermissionResolvable } from "discord.js";

export function HasPermsInChannel(client: Client<true>, channelID: string, memberOrRoleID: string, ...perms: PermissionResolvable[]): boolean | undefined {
    const channel = client.channels.cache.get(channelID) as GuildChannel | undefined;
    if (!channel) return undefined;

    const channelPerms = channel.permissionsFor(memberOrRoleID);
    if (!channelPerms) return undefined;

    return channelPerms.has(perms);
};