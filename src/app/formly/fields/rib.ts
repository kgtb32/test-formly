import { FormlyFieldConfig } from "@ngx-formly/core";
import { FieldExpression } from "../models/field-expression";
import { RibWithUserInfo } from "./rib-versement-prelevement";
import { numberAsTextValidatorRef } from "../validators/number-as-text-validator";

export interface RibFieldConfig {
    key: string;
    expressions?: { [key: string]: FieldExpression<string | boolean> }
    ribList?: RibWithUserInfo[],
}

export function ribListField({
    key = 'rib',
    ...rest
}: RibFieldConfig): FormlyFieldConfig {
    const ribList = rest.ribList?.map(rib => {
        const concatenatedRib = `${rib.bankCode}${rib.deskId}${rib.accountNumber}${rib.key}`
        return { value: concatenatedRib, label: `${concatenatedRib} - ${rib.holderInfos}` }
    })
    return {
        key: `${key}-list`,
        defaultValue: ribList?.[0]?.value,
        type: 'select',
        expressions: rest.expressions,
        props: {
            options: ribList,
            required: true,
            change: (field) => {
                const rib: string = field.model[`${key}-list`];
                field.model[key] = {
                    bankCode: rib?.substring(0, 5),
                    deskId: rib?.substring(5, 10),
                    accountNumber: rib?.substring(10, 21),
                    key: rib?.substring(21, 23)
                }
            }
        },
    }
}

export function ribField({
    key = 'rib',
    ...rest
}: RibFieldConfig): FormlyFieldConfig {
    return {
        key,
        fieldGroupClassName: 'row',
        expressions: rest.expressions,
        fieldGroup: [
            {
                key: 'bankCode',
                type: 'number',
                className: 'col-3',
                defaultValue: '',
                props: {
                    label: 'code Banque',
                    placeholder: '11315',
                    maxLength: 5,
                    required: true,
                },
                validators: {
                    ...numberAsTextValidatorRef
                },
            },
            {
                key: 'deskId',
                type: 'number',
                className: 'col-3',
                defaultValue: '',
                validators: {
                    ...numberAsTextValidatorRef
                },
                props: {
                    label: 'code Guichet',
                    placeholder: '11315',
                    maxLength: 5,
                    required: true,
                }
            },
            {
                key: 'accountNumber',
                type: 'number',
                className: 'col-3',
                defaultValue: '',
                validators: {
                    ...numberAsTextValidatorRef
                },
                props: {
                    label: 'Numéro compte',
                    placeholder: '11315',
                    maxLength: 11,
                    required: true,
                }
            },
            {
                key: 'key',
                type: 'number',
                className: 'col-3',
                expressions: {
                    'model.key': () => '42'
                },
                props: {
                    readonly: true,
                    label: 'Clé RIB',
                    maxLength: 2,
                    required: true,
                }
            }
        ]
    }
}