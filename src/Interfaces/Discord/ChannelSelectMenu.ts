import type { ChannelType } from "discord-api-types/v10";
import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { ChannelDefaultValue } from "../../Types";

export interface ChannelSelectMenu extends BaseSelectMenu {
    channel_types?: ChannelType[];
    default_values?: ChannelDefaultValue[];
};