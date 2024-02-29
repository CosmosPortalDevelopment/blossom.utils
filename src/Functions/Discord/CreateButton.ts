import { ButtonBuilder, ButtonStyle } from "discord.js";

export function CreateButton(customID: string, label: string | null, style: ButtonStyle, isDisabled?: boolean, emoji?: string | null): ButtonBuilder {
    const button = new ButtonBuilder({ style: style, disabled: isDisabled });

    style === ButtonStyle.Link ? button.setURL(customID) : button.setCustomId(customID);

    if (label) button.setLabel(label);
    if (emoji) button.setEmoji(emoji);

    return button;
};