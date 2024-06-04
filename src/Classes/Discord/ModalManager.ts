import { ComponentType, type APIActionRowComponent, type APIModalInteractionResponseCallbackData, type APITextInputComponent } from "discord-api-types/v10";
import type { Modal, TextInput } from "../../Interfaces";

export class ModalManager {
    private _title: string;
    private _custom_id: string;
    private _Components: APIActionRowComponent<APITextInputComponent>[];

    /**
     * @example
     * ```ts
     * const Modal = new ModalManager({
     *     custom_id: "cool_modal",
     *     title: "My Cool Modal"
     * });
     * ```
     * @example
     * A fully created modal:
     * ```ts
     * const Modal = new ModalManager({
     *     custom_id: "cool_modal",
     *     title: "My Cool Modal"
     * })
     * .CreateTextInput({
     *     custom_id: "name",
     *     label: "Name",
     *     style: TextInputStyle.Short,
     *     max_length: 4000,
     *     min_length: 1,
     *     placeholder: "John",
     *     required: true,
     *     value: undefined
     * })
     * .BuildResponse();
     * ```
     */
    constructor(component_data: Modal) {
        this._title = component_data.title;
        this._custom_id = component_data.custom_id;
        this._Components = [];
    };

    /**
     * Creates the text input component for the modal
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * Modal.CreateTextInput({
     *     custom_id: "name",
     *     label: "Name",
     *     style: TextInputStyle.Short,
     *     max_length: 4000,
     *     min_length: 1,
     *     placeholder: "John",
     *     required: true,
     *     value: undefined
     * });
     */
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

    /**
     * Creates the modal response containing the text input components
     * 
     * @example
     * ```ts
     * Modal.BuildResponse();
     * ```
     */
    public BuildResponse(): APIModalInteractionResponseCallbackData {
        const data: APIModalInteractionResponseCallbackData = {
            title: this._title,
            custom_id: this._custom_id,
            components: this._Components
        };

        return data;
    };

    /**
     * Returns the text input components
     * 
     * @example
     * ```ts
     * Modal.BuildComponent();
     * ```
     */
    public BuildComponent(): APIActionRowComponent<APITextInputComponent>[] {
        return this._Components;
    };
};