import type { SelectMenuDefaultValueType } from "discord-api-types/v10";

export type MentionableDefaultValue = {
    id: string,
    type: SelectMenuDefaultValueType.Role | SelectMenuDefaultValueType.User
};