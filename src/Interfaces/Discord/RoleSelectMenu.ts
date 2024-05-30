import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { RoleDefaultValue } from "../../Types";

export interface RoleSelectMenu extends BaseSelectMenu {
    default_values?: RoleDefaultValue[];
};