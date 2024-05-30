import type { APIMessageComponentEmoji, ButtonStyle } from "discord-api-types/v10";
import type { BaseComponent } from "./BaseComponent";

export interface LinkButton extends BaseComponent {
    style: ButtonStyle.Link;
    disabled?: boolean;
    emoji?: APIMessageComponentEmoji;
    label?: string;
};