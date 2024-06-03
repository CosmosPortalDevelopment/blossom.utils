import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Compares the two users roles and checks who has the highest role
 * @param {Guild} guild - The guild class to compare the two IDs
 * @param {Snowflake} user_id - The ID of the user to compare
 * @param {Snowflake} user_id - The ID of the target user to compare
 * @param {boolean} custom_boolean - If an error occurs, returns the boolean you entered
 * 
 * @default false
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const target = interaction.options.getUser("target", true);
 * 
 *     await interaction.reply({
 *         content: `Do you have a higher rank than <@${target.id}>?\nResult: ${CompareRolePosition(interaction.guild, interaction.user.id, target.id, false)}`
 *     });
 * });
 * ```
 */
export async function CompareRolePosition(guild: Guild, user_id: Snowflake, target_id: Snowflake, custom_boolean: boolean = false): Promise<boolean> {
    const member = await guild.members.fetch(user_id).catch((error) => { return undefined });
    if (!member) return custom_boolean;

    const target = await guild.members.fetch(target_id).catch((error) => { return undefined });
    if (!target) return custom_boolean;

    return guild.roles.cache.size - member.roles.highest.position < guild.roles.cache.size - target.roles.highest.position;
};