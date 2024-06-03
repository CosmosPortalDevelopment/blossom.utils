import { ComponentType, type APIActionRowComponent, type APIChannelSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord-api-types/v10";
import type { ChannelSelectMenu, MessageComponentActions } from "../../Interfaces";

export class ChannelSelectMenuManager {
    private _Components: APIChannelSelectComponent[];

    /**
     * @example
     * ```ts
     * const SelectMenu = new ChannelSelectMenuManager();
     * ```
     * @example
     * A fully created channel select menu:
     * ```ts
     * const SelectMenu = new ChannelSelectMenuManager()
     * .CreateSelectMenu({
     *     custom_id: "classrooms",
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a classroom"
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
     * Creates the channel select menu component
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * SelectMenu.CreateSelectMenu({
     *     custom_id: "classrooms",
     *     channel_types: [],
     *     default_values: [],
     *     disabled: false,
     *     max_values: 1,
     *     min_values: 1,
     *     placeholder: "Choose a classroom"
     * });
     * ```
     */
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

    /**
     * Either creates the action row containing the channel select menu component or returns the channel select menu component
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
    public BuildComponent(actions?: MessageComponentActions): APIActionRowComponent<APIMessageActionRowComponent> | APIChannelSelectComponent[] {
        actions = actions ?? { build_action_row: true };

        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._Components
        };

        return !actions.build_action_row ? this._Components : data;
    };
};