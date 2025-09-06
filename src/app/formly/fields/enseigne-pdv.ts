import { FormlyFieldConfig } from "@ngx-formly/core";

export interface EnseignePointDeVenteConfig {
    key?: string;
}

export function enseignePointDeVenteField({
    key = 'commercialName',
    ...rest
}: EnseignePointDeVenteConfig): FormlyFieldConfig {
    return {
        key,
        type: 'input',
        defaultValue: '',
        props: {
            label: 'Enseigne ou point de vente',
            maxLength: 20,
            required: true,
        },
    }
}