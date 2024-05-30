import type { APISelectMenuOption } from "discord-api-types/v10";
import type { BaseSelectMenu } from "./BaseSelectMenu";

export interface StringSelectMenu extends BaseSelectMenu {
    select_options: APISelectMenuOption[];
};