import type { ApplicationCommandType, ApplicationIntegrationType, InteractionContextType, LocalizationMap } from "discord-api-types/v10";

export interface ContextMenuCommand {
    type: Exclude<ApplicationCommandType, ApplicationCommandType.ChatInput>;
    name: string;
    name_localizations?: LocalizationMap | null;
    default_member_permissions?: string | null | undefined;
    dm_permission?: boolean;
    nsfw?: boolean;
    integration_types?: ApplicationIntegrationType[];
    contexts?: InteractionContextType[];
};