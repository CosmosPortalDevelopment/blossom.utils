export interface BaseComponent {
    /**
     * An identifier for the component
     * 
     * @note
     * - `custom_id` must be unquie per component and a maximum of 100 characters.
     * - For link buttons only • We use `custom_id` for the `url` field.
     */
    custom_id: string;
};