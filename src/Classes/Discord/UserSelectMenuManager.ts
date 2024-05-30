import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIUserSelectComponent } from "discord-api-types/v10";
import type { UserSelectMenu } from "../../Interfaces";

export class UserSelectMenuManager {
    private _Components: APIUserSelectComponent[];

    constructor() {
        this._Components = [];
    };

    public CreateSelectMenu(component_data: UserSelectMenu): this {
        const data: APIUserSelectComponent = {
            type: ComponentType.UserSelect,
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