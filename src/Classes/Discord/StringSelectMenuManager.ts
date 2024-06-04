import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIStringSelectComponent } from "discord-api-types/v10";
import type { StringSelectMenu } from "../../Interfaces";

export class StringSelectMenuManager {
    private _Components: APIStringSelectComponent[];

    /**
     * @example
     * ```ts
     * const SelectMenu = new StringSelectMenuManager();
     * ```
     * @example
     * A fully created string select menu:
     * ```ts
     * const SelectMenu = new StringSelectMenuManager()
     * .CreateSelectMenu({
     *     custom_id: "class_desks",
     *     select_options: [
     *         {
     *             label: "Desk 1",
     *             value: "desk_1",
     *             default: false,
     *             description: undefined,
     *             emoji: undefined
     *         },
     *         {
     *             label: "Desk 2",
     *             value: "desk_2",
     *             default: false,
     *             description: undefined,
     *             emoji: undefined
     *         }
     *     ],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a desk"
     * })
     * .BuildActionRow();
     * ```
     */
    constructor() {
        this._Components = [];
    };

    /**
     * Creates the string select menu component
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * SelectMenu.CreateSelectMenu({
     *     custom_id: "class_desks",
     *     select_options: [
     *         {
     *             label: "Desk 1",
     *             value: "desk_1",
     *             default: false,
     *             description: undefined,
     *             emoji: undefined
     *         },
     *         {
     *             label: "Desk 2",
     *             value: "desk_2",
     *             default: false,
     *             description: undefined,
     *             emoji: undefined
     *         }
     *     ],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a desk"
     * });
     * ```
     */
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

    /**
     * Creates the action row containing the string select menu component
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
     * Returns the string select menu component
     * 
     * @example
     * ```ts
     * SelectMenu.BuildComponent();
     * ```
     */
    public BuildComponent(): APIStringSelectComponent[] {
        return this._Components;
    };
};