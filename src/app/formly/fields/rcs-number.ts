import { FormlyFieldConfig } from "@ngx-formly/core";
import { numberAsTextValidatorRef } from "../validators/number-as-text-validator";

export interface RcsNumberConfig {
    key?: string;
    required?: boolean
}

export function rcsNumberField({
    key = 'rcsNumber',
    required = false,
    ...rest
}: RcsNumberConfig): FormlyFieldConfig {
    return {
        key,
        type: 'number',
        defaultValue: '',
        props: {
            label: 'Numéro RCS',
            maxLength: 8,
            required,
        },
        validators: {
            ...numberAsTextValidatorRef
        },
    }
}