import { FormlyFieldConfig } from "@ngx-formly/core";
import { FieldListChoice } from "../models/field-list-choices";

export const rawMcc: FieldListChoice[] = [
    {
        label: '5462 - BOULANGERIES',
        value: '5462',
    },
    {
        label: '5463 - PÂTISSERIES',
        value: '5463',
    }
]

export interface MccConfig {
    key?: string;
    mccList?: FieldListChoice[],
    required?: boolean
}

export function mccField({
    key = 'mcc',
    mccList = rawMcc,
    required = false,
    ...rest
}: MccConfig): FormlyFieldConfig {
    return {
        key,
        type: 'select',
        defaultValue: mccList[0].value,
        props: {
            options: mccList,
            label: 'Code MCC',
            required,
        },
    }
}