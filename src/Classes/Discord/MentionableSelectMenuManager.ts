import { ComponentType, type APIActionRowComponent, type APIMentionableSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord-api-types/v10";
import type { MentionableSelectMenu } from "../../Interfaces";

export class MentionableSelectMenuManager {
    private _Components: APIMentionableSelectComponent[];

    constructor() {
        this._Components = [];
    };

    public CreateSelectMenu(component_data: MentionableSelectMenu): this {
        const data: APIMentionableSelectComponent = {
            type: ComponentType.MentionableSelect,
            custom_id: component_data.custom_id,
            default_values: component_data.default_values,
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