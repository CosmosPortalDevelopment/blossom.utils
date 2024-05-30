import { ComponentType, type APIActionRowComponent, type APIChannelSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord-api-types/v10";
import type { ChannelSelectMenu } from "../../Interfaces";

export class ChannelSelectMenuManager {
    private _Components: APIChannelSelectComponent[];

    constructor() {
        this._Components = [];
    };

    public CreateSelectMenu(component_data: ChannelSelectMenu): this {
        const data: APIChannelSelectComponent = {
            type: ComponentType.ChannelSelect,
            custom_id: component_data.custom_id,
            channel_types: component_data.channel_types,
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