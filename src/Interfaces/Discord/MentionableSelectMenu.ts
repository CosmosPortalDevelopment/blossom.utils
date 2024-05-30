import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { MentionableDefaultValue } from "../../Types";

export interface MentionableSelectMenu extends BaseSelectMenu {
    default_values?: MentionableDefaultValue[];
};