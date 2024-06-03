import type { APIMessageComponentEmoji, ButtonStyle } from "discord-api-types/v10";
import type { BaseComponent } from "./BaseComponent";

export interface LinkButton extends BaseComponent {
    /**
     * A button style
     * 
     * @note `ButtonStyle.Link` must be used here.
     */
    style: ButtonStyle.Link;
    /**
     * Whether the button is disabled
     * 
     * @default false
     */
    disabled?: boolean;
    /**
     * Emoji that appears on the button
     */
    emoji?: APIMessageComponentEmoji;
    /**
     * Text that appears on the button, max 80 characters
     */
    label?: string;
};