import { FormlyFieldConfig } from "@ngx-formly/core";
import { numberAsTextValidatorRef } from "../validators/number-as-text-validator";

export interface PersonNumberConfig {
    key?: string;
    readonly?: boolean,
    required?: boolean
}

export function personNumberField({
    key = 'personNumber',
    readonly = false,
    required = false,
    ...rest
}: PersonNumberConfig): FormlyFieldConfig {
    return {
        key,
        type: 'number',
        defaultValue: '',
        props: {
            label: 'Numéro de personne',
            maxLength: 8,
            required,
            readonly,
        },
        validators: {
            ...numberAsTextValidatorRef
        },
    }
}