import type { BaseComponent } from "./BaseComponent";

export interface BaseSelectMenu extends BaseComponent {
    disabled?: boolean;
    max_values?: number;
    min_values?: number;
    placeholder?: string;
};