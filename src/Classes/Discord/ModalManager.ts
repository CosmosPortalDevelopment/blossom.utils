import { ComponentType, type APIActionRowComponent, type APIModalInteractionResponseCallbackData, type APITextInputComponent } from "discord-api-types/v10";
import type { TextInput } from "../../Interfaces";

export class ModalManager {
    private _Components: APIActionRowComponent<APITextInputComponent>[];

    constructor() {
        this._Components = [];
    };

    public CreateTextInput(component_data: TextInput): this {
        const data: APIActionRowComponent<APITextInputComponent> = {
            type: ComponentType.ActionRow,
            components: [
                {
                    type: ComponentType.TextInput,
                    custom_id: component_data.custom_id,
                    label: component_data.label,
                    style: component_data.style,
                    max_length: component_data.max_length,
                    min_length: component_data.min_length,
                    placeholder: component_data.placeholder,
                    required: component_data.required,
                    value: component_data.value
                }
            ]
        };

        this._Components.push(data);

        return this;
    };

    public BuildModal(title: string, custom_id: string): APIModalInteractionResponseCallbackData {
        const data: APIModalInteractionResponseCallbackData = {
            title: title,
            custom_id: custom_id,
            components: this._Components
        };

        return data;
    };
};