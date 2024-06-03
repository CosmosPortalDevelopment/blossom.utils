import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIStringSelectComponent } from "discord-api-types/v10";
import type { MessageComponentActions, StringSelectMenu } from "../../Interfaces";

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
     * .BuildComponent({
     *     build_action_row: true
     * });
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
     * Either creates the action row containing the string select menu component or returns the string select menu component
     * @param actions - The structure of actions required while building the component
     * 
     * @example
     * ```ts
     * SelectMenu.BuildComponent();
     * ```
     * 
     * @example
     * Returns the component in an action row
     * ```ts
     * SelectMenu.BuildComponent({
     *     build_action_row: true
     * });
     * ```
     *  
     * @example
     * Returns the component
     * ```ts
     * SelectMenu.BuildComponent({
     *     build_action_row: false
     * });
     * ```
     */
    public BuildComponent(actions?: MessageComponentActions): APIActionRowComponent<APIMessageActionRowComponent> | APIStringSelectComponent[] {
        actions = actions ?? { build_action_row: true };

        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._Components
        };

        return !actions.build_action_row ? this._Components : data;
    };
};