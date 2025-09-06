import { FormlyFieldConfig } from "@ngx-formly/core";
import { FieldListChoice } from "../models/field-list-choices";

export const markets: FieldListChoice[] = [
    {
        label: 'Associations de proximité',
        value: 'P',
    },
    {
        label: 'Service public',
        value: 'U',
    }
]

export interface MarketsConfig {
    key?: string;
    marketsTypes?: FieldListChoice[],
}

export function marketField({
    key = 'market',
    marketsTypes = markets,
    ...rest
}: MarketsConfig): FormlyFieldConfig {
    return {
        key,
        type: 'select',
        defaultValue: marketsTypes[0].value,
        props: {
            options: marketsTypes,
            label: 'Marché',
            required: true,
        },
    }
}