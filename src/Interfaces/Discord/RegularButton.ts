import type { APIMessageComponentEmoji, ButtonStyle } from "discord-api-types/v10";
import type { BaseComponent } from "./BaseComponent";

export interface RegularButton extends BaseComponent {
    style: Exclude<ButtonStyle, ButtonStyle.Link>;
    disabled: boolean;
    emoji: APIMessageComponentEmoji;
    label: string;
};