import { ComponentType, type APIActionRowComponent, type APIButtonComponent, type APIButtonComponentWithCustomId, type APIButtonComponentWithURL, type APIMessageActionRowComponent, type APIMessageComponent } from "discord-api-types/v10";
import type { LinkButton, RegularButton } from "../../Interfaces";

export class ButtonBuilder {
    private readonly _data: APIButtonComponent[];

    /**
     * @example
     * ```ts
     * const Button = new ButtonBuilder();
     * ```
     * @example
     * A fully created button:
     * ```ts
     * const Button = new ButtonBuilder()
     * .CreateLinkButton({
     *     custom_id: "https://google.com/",
     *     style: ButtonStyle.Link,
     *     label: "View Link"
     * })
     * .CreateRegularButton({
     *     custom_id: "click_me",
     *     style: ButtonStyle.Primary,
     *     label: "Click me!"
     * })
     * .BuildActionRow();
     * ```
     */
    constructor() {
        this._data = [];
    };

    /**
     * Creates a Link Button component
     * @param {LinkButton} component_data - The structure of data needed to create the Link Button component
     * 
     * @example
     * ```ts
     * Button.CreateLinkButton({
     *     custom_id: "https://google.com/",
     *     style: ButtonStyle.Link,
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

        this._data.push(data);

        return this;
    };

    /**
     * Creates a Regular Button component
     * @param {RegularButton} component_data - The structure of data needed to create the Regular Button component
     * 
     * @example
     * ```ts
     * Button.CreateRegularButton({
     *     custom_id: "click_me",
     *     style: ButtonStyle.Primary,
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

        this._data.push(data);

        return this;
    };

    /**
     * Builds the action row containing the Link/Regular Button components
     * 
     * @example
     * ```ts
     * Button.BuildActionRow();
     * ```
     */
    public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._data
        };

        return data;
    };

    /**
     * Returns all the Button components
     * 
     * @example
     * ```ts
     * Button.Components;
     * ```
     */
    public get Components(): APIButtonComponent[] {
        return this._data;
    };
};