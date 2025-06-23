import { FormlyFieldConfig } from '@ngx-formly/core';
import { ribField, ribListField } from './rib';

export interface RibWithUserInfo {
    bankCode: string;
    deskId: string;
    accountNumber: string;
    key: string;
    holderInfos: string;
}

export interface RibVersementPrelevementFieldConfig {
    mode?: 'normal' | 'list';
    ribList?: RibWithUserInfo[];
}

export function ribVersementAndPrelevementField({
    mode = 'normal',
    ribList = [],
    ...rest
}: RibVersementPrelevementFieldConfig): FormlyFieldConfig {
    return {
        expressions: {
            'model.ribVersement-list': (field: FormlyFieldConfig) => {
                const rib = field.model?.ribVersement;
                return `${rib?.bankCode}${rib?.deskId}${rib?.accountNumber}${rib?.key}`
            },
            'model.ribPrelevement-list': (field: FormlyFieldConfig) => {
                const rib = field.model?.ribPrelevement ?? field.model?.ribVersement;
                return `${rib?.bankCode}${rib?.deskId}${rib?.accountNumber}${rib?.key}`
            }
        },
        fieldGroup: [
            mode === 'normal'
                ? ribField({
                    key: 'ribVersement',
                })
                : ribListField({
                    key: 'ribVersement',
                    ribList,
                }),
            {
                defaultValue: false,
                type: 'checkbox',
                key: 'ribPrelevementDifferentVersement',
                props: {
                    label: 'Rib de prelevement différent du rib de versement',
                },
            },
            mode === 'normal'
                ? ribField({
                    key: 'ribPrelevement',
                    expressions: {
                        hide: (form: FormlyFieldConfig) =>
                            !form.parent?.model?.ribPrelevementDifferentVersement,
                    },
                })
                : ribListField({
                    key: 'ribPrelevement',
                    ribList,
                    expressions: {
                        hide: (form: FormlyFieldConfig) =>
                            !form.parent?.model?.ribPrelevementDifferentVersement,
                    },
                }),
        ],
    };
}
