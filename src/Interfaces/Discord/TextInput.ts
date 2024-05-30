import type { TextInputStyle } from "discord-api-types/v10";
import type { BaseComponent } from "./BaseComponent";

export interface TextInput extends BaseComponent {
    label: string;
    style: TextInputStyle;
    max_length?: number;
    min_length?: number;
    placeholder?: string;
    required?: boolean;
    value?: string;
};