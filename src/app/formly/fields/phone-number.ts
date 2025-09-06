import { FormlyFieldConfig } from "@ngx-formly/core";
import { FieldExpression } from "../models/field-expression";

export interface PhoneNumberConfig {
    key?: string;
    label?: string;
    required?: boolean;
    expressions?: { [key: string]: FieldExpression<string | boolean> }
}

export function phoneField({
    key = 'phone',
    label = "Téléphone",
    required = false,
    ...rest
}: PhoneNumberConfig): FormlyFieldConfig {
    return {
        key,
        type: 'input',
        defaultValue: '',
        props: {
            attributes: {
                type: 'tel',
            },
            label,
            maxLength: 10,
            required,
            pattern: '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
        },
        expressions: rest.expressions
    }
}