import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks the timeout status of a member
 * @param {Guild} guild - The guild class to check the timeout status of the member
 * @param {Snowflake} member_id - The ID of the member to check
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const member = interaction.options.getUser("member", true);
 * 
 *     await interaction.reply({
 *         content: `Is <@${member.id}> timed out?\nResult: ${MemberTimeoutStatus(interaction.guild, member.id)}`
 *     });
 * });
 * ```
 */
export async function MemberTimeoutStatus(guild: Guild, member_id: Snowflake): Promise<boolean | undefined> {
    const member = await guild.members.fetch(member_id).catch((error) => { return undefined });
    if (!member) return undefined;

    return member.isCommunicationDisabled();
};