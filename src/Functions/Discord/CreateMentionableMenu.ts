import { MentionableSelectMenuBuilder } from "discord.js";

export function CreateMentionableMenu(customID: string, isDisabled: boolean, maxValues: number, minValues: number, placeholder: string): MentionableSelectMenuBuilder {
    const menu = new MentionableSelectMenuBuilder({ customId: customID, disabled: isDisabled, maxValues: maxValues, minValues: minValues, placeholder: placeholder });

    return menu;
};