import type { Client } from "discord.js";

/**
 * Checks if a webhook exists
 * @param {Client<boolean>} client - Your client class to check for the webhook
 * @param {string} webhook_id - The ID of the webhook to check
 * @param {string} webhook_token - The token of the webhook to check
 * 
 * @example
 * ```ts
 * client.on(Events.InteractionCreate, async interaction => {
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     if (!interaction.inCachedGuild || !interaction.isChatInputCommand()) return;
 * 
 *     const webhook_id = interaction.options.getString("webhook_id", true);
 *     const webhook_token = interaction.options.getString("webhook_token", true);
 * 
 *     await interaction.reply({
 *         content: `Does webhook exist?\nResult: ${WebhookExist(client, webhook_id, webhook_token)}`
 *     });
 * });
 * ```
 */
export async function WebhookExist(client: Client<boolean>, webhook_id: string, webhook_token: string): Promise<boolean> {
    const webhook = await client.fetchWebhook(webhook_id, webhook_token).catch((error) => { return undefined });

    return !!webhook;
};