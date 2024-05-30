import type { Client, PermissionResolvable } from "discord.js";
import type { Snowflake } from "../../Types";

export async function HasChannelPermissions(client: Client<boolean>, channel_id: Snowflake, member_or_role_id: Snowflake, permissions: PermissionResolvable[]): Promise<boolean | undefined> {
    const channel = await client.channels.fetch(channel_id).catch((error) => { return undefined });
    if (!channel) return undefined;
    if (channel.isDMBased()) return undefined;

    const channelPerms = channel.permissionsFor(member_or_role_id);
    if (!channelPerms) return undefined;

    return channelPerms.has(permissions);
};