import { FormlyFieldConfig } from "@ngx-formly/core";
import { numberAsTextValidatorRef } from "../validators/number-as-text-validator";

export interface CommunityTvaNumberConfig {
    key?: string;
    required?: boolean
}

export function communityTvaNumberField({
    key = 'communityTvaNumber',
    required = false,
    ...rest
}: CommunityTvaNumberConfig): FormlyFieldConfig {
    return {
        key,
        type: 'number',
        defaultValue: '',
        props: {
            label: 'Numéro de TVA intracommunautaire',
            maxLength: 20,
            required,
        },
        validators: {
            ...numberAsTextValidatorRef
        },
    }
}