import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIStringSelectComponent } from "discord-api-types/v10";
import type { StringSelectMenu } from "../../Interfaces";

export class StringSelectMenuManager {
    private _Components: APIStringSelectComponent[];

    constructor() {
        this._Components = [];
    };

    public CreateSelectMenu(component_data: StringSelectMenu): this {
        const data: APIStringSelectComponent = {
            type: ComponentType.StringSelect,
            custom_id: component_data.custom_id,
            options: component_data.select_options,
            disabled: component_data.disabled,
            max_values: component_data.max_values,
            min_values: component_data.min_values,
            placeholder: component_data.placeholder
        };

        this._Components.push(data);

        return this;
    };

    public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._Components
        };

        return data;
    };
};