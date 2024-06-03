import type { Guild, PermissionResolvable } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a member has the permissions listed
 * @param {Guild} guild - The guild class to check the permissions of the member
 * @param {Snowflake} member_id - The ID of the member to check
 * @param {PermissionResolvable} permissions - An array of permissions
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const member = interaction.options.getUser("member", true);
 * 
 *     await interaction.reply({
 *         content: `Does <@${member.id}> have Ban Members permission?\nResult: ${MemberHasPermissions(interaction.guild, member.id, [ PermissionsBitField.Flags.BanMembers ])}`
 *     });
 * });
 * ```
 */
export async function MemberHasPermissions(guild: Guild, member_id: Snowflake, permissions: PermissionResolvable[]): Promise<boolean | undefined> {
    const member = await guild.members.fetch(member_id).catch((error) => { return undefined });
    if (!member) return undefined;

    const member_permissions = member.permissions;
    if (!member_permissions) return undefined;

    return member_permissions.has(permissions);
};