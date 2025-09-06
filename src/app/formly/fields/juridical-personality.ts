import { FormlyFieldConfig } from "@ngx-formly/core";
import { FieldListChoice } from "../models/field-list-choices";

export const personalitiesTypes: FieldListChoice[] = [
    {
        label: 'Morale',
        value: 'MORALE',
    },
    {
        label: 'Physique',
        value: 'PHYSIQUE',
    }
]

export interface JuridicalPersonalityConfig {
    key?: string;
    personalitiesTypes?: FieldListChoice[],
}

export function juridicalPersonalityField({
    key = 'juridicalPersonality',
    personalitiesTypes: basePersonalitiesTypes,
    ...rest
}: JuridicalPersonalityConfig): FormlyFieldConfig {
    return {
        key,
        type: 'select',
        defaultValue: personalitiesTypes[0].value,
        props: {
            options: personalitiesTypes,
            label: 'Personnalité juridique',
            required: true,
        },
    }
}