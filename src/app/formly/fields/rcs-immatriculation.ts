import { FormlyFieldConfig } from "@ngx-formly/core";

export interface RcsImmatriculationConfig {
    key?: string;
    required?: boolean
}

export function rcsImmatriculationField({
    key = 'rcsImmatriculation',
    required = false,
    ...rest
}: RcsImmatriculationConfig): FormlyFieldConfig {
    return {
        key,
        type: 'input',
        defaultValue: '',
        props: {
            label: "Commune d'immatriculation RCS",
            maxLength: 20,
            required,
        },
    }
}