import { FormlyFieldConfig } from "@ngx-formly/core";

export interface EstablishementManagerConfig {
    key?: string;
}

export function establishementManagerField({
    key = 'establishementManager',
    ...rest
}: EstablishementManagerConfig): FormlyFieldConfig {
    return {
        key,
        type: 'input',
        defaultValue: '',
        props: {
            label: 'Gestionnaire du point de vente',
            maxLength: 20,
            required: true,
        },
    }
}