import type { Client } from "discord.js";

export async function WebhookExist(client: Client<boolean>, webhook_id: string, webhook_token: string): Promise<boolean> {
    const webhook = await client.fetchWebhook(webhook_id, webhook_token).catch((error) => { return undefined });

    return !!webhook;
};