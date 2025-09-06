import { FormlyFieldConfig } from "@ngx-formly/core";
import { numberAsTextValidatorRef } from "../validators/number-as-text-validator";

export interface SirenConfig {
    key?: string;
    required?: boolean
}

export function sirenField({
    key = 'siren',
    required = false,
    ...rest
}: SirenConfig): FormlyFieldConfig {
    return {
        key,
        type: 'number',
        defaultValue: '',
        props: {
            placeholder: '123456789',
            label: 'Siren',
            maxLength: 9,
            required,
        },
        validators: {
            ...numberAsTextValidatorRef
        },
    }
}