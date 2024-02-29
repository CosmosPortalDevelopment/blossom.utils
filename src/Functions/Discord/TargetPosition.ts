import type { Guild } from "discord.js";

export async function TargetPosition(guild: Guild, authorID: string, targetID: string, returnCustom: boolean = false): Promise<boolean> {
    const author = await guild.members.fetch(authorID).catch((error) => { return undefined });
    if (!author) return false;

    const target = await guild.members.fetch(targetID).catch((error) => { return undefined });
    if (!target) return returnCustom;

    return guild.roles.cache.size - author.roles.highest.position < guild.roles.cache.size - target.roles.highest.position;
};