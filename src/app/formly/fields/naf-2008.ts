import { FormlyFieldConfig } from "@ngx-formly/core";
import { FieldListChoice } from "../models/field-list-choices";

export const nafs: FieldListChoice[] = [
    {
        label: '1071C - Boulangeries',
        value: '1071C',
    },
    {
        label: '1071D - Pâtisseries',
        value: '1071D',
    }
]

export interface Naf2008Config {
    key?: string;
    nafsList?: FieldListChoice[],
}

export function naf2008Field({
    key = 'naf2008',
    nafsList = nafs,
    ...rest
}: Naf2008Config): FormlyFieldConfig {
    return {
        key,
        type: 'select',
        defaultValue: nafsList[0].value,
        props: {
            options: nafsList,
            label: 'Code NAF 2008',
            required: true,
        },
    }
}