import { ComponentType, type APIActionRowComponent, type APIMentionableSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord-api-types/v10";
import type { MentionableSelectMenu, MessageComponentActions } from "../../Interfaces";

export class MentionableSelectMenuManager {
    private _Components: APIMentionableSelectComponent[];

    /**
     * @example
     * ```ts
     * const SelectMenu = new MentionableSelectMenuManager();
     * ```
     * @example
     * A fully created mentionable select menu:
     * ```ts
     * const SelectMenu = new MentionableSelectMenuManager()
     * .CreateSelectMenu({
     *     custom_id: "class_roles_and_members",
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a class role or member"
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
     * Creates the mentionable select menu component
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * SelectMenu.CreateSelectMenu({
     *     custom_id: "class_roles_and_members",
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a class role or member"
     * });
     * ```
     */
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

    /**
     * Either creates the action row containing the mentionable select menu component or returns the mentionable select menu component
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
    public BuildComponent(actions?: MessageComponentActions): APIActionRowComponent<APIMessageActionRowComponent> | APIMentionableSelectComponent[] {
        actions = actions ?? { build_action_row: true };

        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._Components
        };

        return !actions.build_action_row ? this._Components : data;
    };
};