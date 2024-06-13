import type { APIApplicationCommandOption, ApplicationIntegrationType, InteractionContextType, LocalizationMap } from "discord-api-types/v10";

export interface ChatInputCommand {
    name: string;
    name_localizations?: LocalizationMap | null;
    description: string;
    description_localizations?: LocalizationMap | null;
    options?: APIApplicationCommandOption[];
    default_member_permissions?: string | null | undefined;
    dm_permission?: boolean;
    nsfw?: boolean;
    integration_types?: ApplicationIntegrationType[];
    contexts?: InteractionContextType[];
};