import { ComponentType, type APIActionRowComponent, type APIButtonComponent, type APIButtonComponentWithCustomId, type APIButtonComponentWithURL, type APIMessageActionRowComponent, type APIMessageComponent } from "discord-api-types/v10";
import type { LinkButton, MessageComponentActions, RegularButton } from "../../Interfaces";

export class ButtonManager {
    private _Components: APIButtonComponent[];

    /**
     * @example
     * ```ts
     * const Button = new ButtonManager();
     * ```
     * @example
     * A fully created button:
     * ```ts
     * const Button = new ButtonManager()
     * .CreateLinkButton({
     *     custom_id: "https://google.com/",
     *     style: ButtonStyle.Link,
     *     disabled: false,
     *     emoji: undefined,
     *     label: "View Link"
     * })
     * .CreateRegularButton({
     *     custom_id: "click_me",
     *     style: ButtonStyle.Primary,
     *     disabled: false,
     *     emoji: undefined,
     *     label: "Click me!"
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
     * Creates a link button component
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * Button.CreateLinkButton({
     *     custom_id: "https://google.com/",
     *     style: ButtonStyle.Link,
     *     disabled: false,
     *     emoji: undefined,
     *     label: "View Link"
     * });
     * ```
     */
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

    /**
     * Creates a regular button component
     * @param component_data - The structure of data needed to create the component.
     * 
     * @example
     * ```ts
     * Button.CreateRegularButton({
     *     custom_id: "click_me",
     *     style: ButtonStyle.Primary,
     *     disabled: false,
     *     emoji: undefined,
     *     label: "Click me!"
     * });
     * ```
     */
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

    /**
     * Either creates the action row containing the button components or returns the button components
     * @param actions - The structure of actions required while building the components
     * 
     * @example
     * ```ts
     * Button.BuildComponent();
     * ```
     * 
     * @example
     * Returns the components in an action row
     * ```ts
     * Button.BuildComponent({
     *     build_action_row: true
     * });
     * ```
     *  
     * @example
     * Returns the components
     * ```ts
     * Button.BuildComponent({
     *     build_action_row: false
     * });
     * ```
     */
    public BuildComponent(actions?: MessageComponentActions): APIActionRowComponent<APIMessageActionRowComponent> | APIButtonComponent[] {
        actions = actions ?? { build_action_row: true };

        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._Components
        };

        return !actions.build_action_row ? this._Components : data;
    };
};