import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { UserDefaultValue } from "../../Types";

export interface UserSelectMenu extends BaseSelectMenu {
    default_values?: UserDefaultValue[];
};