import { FormlyFieldConfig } from "@ngx-formly/core";

export interface EmailConfig {
    key?: string;
}

export function emailField({
    key = 'email',
    ...rest
}: EmailConfig): FormlyFieldConfig {
    return {
        key,
        type: 'input',
        defaultValue: '',
        props: {
            attributes: {
                type: 'email',
            },
            label: 'Adresse E-mail',
            maxLength: 100,
            required: true,
        },
    }
}