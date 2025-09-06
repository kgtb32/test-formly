import { FormlyFieldConfig } from "@ngx-formly/core";
import { numberAsTextValidatorRef } from "../validators/number-as-text-validator";

export interface BankingClientNumberConfig {
    key?: string;
    required?: boolean
}

export function BankingClientNumberField({
    key = 'bankingClient',
    required = false,
    ...rest
}: BankingClientNumberConfig): FormlyFieldConfig {
    return {
        key,
        type: 'number',
        defaultValue: '',
        props: {
            label: 'Entité titulaire / Client bancaire',
            maxLength: 20,
            required,
        },
        validators: {
            ...numberAsTextValidatorRef
        },
    }
}