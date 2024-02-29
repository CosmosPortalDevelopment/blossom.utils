import { RoleSelectMenuBuilder } from "discord.js";

export function CreateRoleMenu(customID: string, isDisabled: boolean, maxValues: number, minValues: number, placeholder: string): RoleSelectMenuBuilder {
    const menu = new RoleSelectMenuBuilder({ customId: customID, disabled: isDisabled, maxValues: maxValues, minValues: minValues, placeholder: placeholder });

    return menu;
};