import type { ChannelType } from "discord-api-types/v10";

export type GuildChannelCountType = "all" | Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM | ChannelType.GuildDirectory> | Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM | ChannelType.GuildDirectory>[];