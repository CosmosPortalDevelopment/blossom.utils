import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIRoleSelectComponent } from "discord-api-types/v10";
import type { RoleSelectMenu } from "../../Interfaces";

export class RoleSelectMenuManager {
    private _Components: APIRoleSelectComponent[];

    /**
     * @example
     * ```ts
     * const SelectMenu = new RoleSelectMenuManager();
     * ```
     * @example
     * A fully created role select menu:
     * ```ts
     * const SelectMenu = new RoleSelectMenuManager()
     * .CreateSelectMenu({
     *     custom_id: "class_roles",
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a class role"
     * })
     * .BuildActionRow();
     * ```
     */
    constructor() {
        this._Components = [];
    };

    /**
     * Creates the role select menu component
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * SelectMenu.CreateSelectMenu({
     *     custom_id: "class_roles",
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a class role"
     * });
     * ```
     */
    public CreateSelectMenu(component_data: RoleSelectMenu): this {
        const data: APIRoleSelectComponent = {
            type: ComponentType.RoleSelect,
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
     * Creates the action row containing the role select menu component
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
     * Returns the role select menu component
     * 
     * @example
     * ```ts
     * SelectMenu.BuildComponent();
     * ```
     */
    public BuildComponent(): APIRoleSelectComponent[] {
        return this._Components;
    };
};