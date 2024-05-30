import type { Client } from "discord.js";
import type { Snowflake } from "../../Types";

export async function ChannelExist(client: Client<boolean>, channel_id: Snowflake): Promise<boolean> {
    const channel = await client.channels.fetch(channel_id).catch((error) => { return undefined });

    return !!channel;
};