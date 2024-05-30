import { ComponentType, type APIActionRowComponent, type APIButtonComponent, type APIButtonComponentWithCustomId, type APIButtonComponentWithURL, type APIMessageActionRowComponent, type APIMessageComponent } from "discord-api-types/v10";
import type { LinkButton, RegularButton } from "../../Interfaces";

export class ButtonManager {
    private _Components: APIButtonComponent[];

    constructor() {
        this._Components = [];
    };

    public CreateLinkButton(component_data: LinkButton): this {
        const data: APIButtonComponentWithURL = {
            type: ComponentType.Button,
            style: component_data.style,
            url: component_data.custom_id,
            disabled: component_data.disabled,
            emoji: component_data.emoji,
            label: component_data.label
        };

        this._Components.push(data);

        return this;
    };

    public CreateRegularButton(component_data: RegularButton): this {
        const data: APIButtonComponentWithCustomId = {
            type: ComponentType.Button,
            custom_id: component_data.custom_id,
            style: component_data.style,
            disabled: component_data.disabled,
            emoji: component_data.emoji,
            label: component_data.label
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