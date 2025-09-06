import { FormlyFieldConfig } from "@ngx-formly/core";
import { numberAsTextValidatorRef } from "../validators/number-as-text-validator";
import { FieldExpression } from "../models/field-expression";

export interface SiretConfig {
    key?: string;
    required?: boolean,
    readonly?: boolean
    expressions?: { [key: string]: FieldExpression<string> }
}

export interface OnWaitSiretConfig {
    key?: string,
    readonly?: boolean
}

export interface FictiveSiretConfig {
    key?: string,
    readonly?: boolean
}

export interface SiretGroupConfig {
    key?: string;
    readonly?: boolean
    siretRequired?: boolean
}

export function siretGroup({
    key = "siret",
    ...rest
}: SiretGroupConfig): FormlyFieldConfig {
    return {
        key,
        fieldGroup: [
            siretField({
                readonly: rest.readonly,
                required: rest.siretRequired,
                expressions: {
                    'props.disabled': 'model.onWaitSiret || model.declareFictive'
                }
            }),
            enAttenteSiretField({
                readonly: rest.readonly,
            }),
            declareFictiveSiret({
                readonly: rest.readonly,
            })
        ]
    }
}

export function enAttenteSiretField({
    key = 'onWaitSiret',
    readonly = false,
    ...rest
}: OnWaitSiretConfig): FormlyFieldConfig {
    return {
        key,
        type: 'checkbox',
        defaultValue: false,
        props: {
            label: 'En Attente SIRET',
            readonly,
            change: (field: FormlyFieldConfig) => siretOptionUpdated(field, ['declareFictive'])
        }
    }
}

function siretOptionUpdated(field: FormlyFieldConfig, fieldsToReset: string[]) {
    const newFormData: { [key: string]: string | boolean } = {};
    fieldsToReset.forEach(field => newFormData[field] = false);
    field.parent!.formControl?.patchValue(newFormData)
}

export function declareFictiveSiret({
    key = "declareFictive",
    readonly = false,
    ...rest
}: FictiveSiretConfig): FormlyFieldConfig {
    return {
        key,
        type: 'checkbox',
        defaultValue: false,
        props: {
            label: 'Déclarer SIRET Fictif',
            readonly,
            change: (field: FormlyFieldConfig) => siretOptionUpdated(field, ['onWaitSiret'])
        }
    }
}

export function siretField({
    key = 'siret',
    required = false,
    readonly = false,
    ...rest
}: SiretConfig): FormlyFieldConfig {
    return {
        key,
        type: 'number',
        defaultValue: '',
        expressions: rest.expressions,
        props: {
            placeholder: '123456789',
            label: 'SIRET',
            maxLength: 14,
            required,
            readonly
        },
        validators: {
            ...numberAsTextValidatorRef
        },
    }
}