import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIUserSelectComponent } from "discord-api-types/v10";
import type { UserSelectMenu } from "../../Interfaces";

export class UserSelectMenuManager {
    private _Components: APIUserSelectComponent[];

    /**
     * @example
     * ```ts
     * const SelectMenu = new UserSelectMenuManager();
     * ```
     * @example
     * A fully created user select menu:
     * ```ts
     * const SelectMenu = new UserSelectMenuManager()
     * .CreateSelectMenu({
     *     custom_id: "class_members",
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a class member"
     * })
     * .BuildActionRow();
     * ```
     */
    constructor() {
        this._Components = [];
    };

    /**
     * Creates the user select menu component
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * SelectMenu.CreateSelectMenu({
     *     custom_id: "class_members",
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a class member"
     * });
     * ```
     */
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

    /**
     * Creates the action row containing the user select menu component
     * 
     * @example
     * ```ts
     * SelectMenu.BuildActionRow();
     * ```
     */
    public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._Components
        };

        return data;
    };

    /**
     * Returns the user select menu component
     * 
     * @example
     * ```ts
     * SelectMenu.BuildComponent();
     * ```
     */
    public BuildComponent(): APIUserSelectComponent[] {
        return this._Components;
    };
};