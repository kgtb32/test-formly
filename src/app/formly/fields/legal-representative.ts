import { FormlyFieldConfig } from "@ngx-formly/core";

export interface LegalRepresentativeConfig {
    key?: string;

}

export function legalRepresentativeField({
    key = 'legalRepresentative',
    ...rest
}: LegalRepresentativeConfig): FormlyFieldConfig {
    return {
        key,
        type: 'input',
        defaultValue: '',
        props: {
            label: 'Représentant légal',
            maxLength: 20,
            required: true,
        },
    }
}