import { FormlyFieldConfig } from "@ngx-formly/core";
import { FieldListChoice } from "../models/field-list-choices";

export interface AddressFieldConfig {
    adressesTypes: FieldListChoice[]
    postalCodes: FieldListChoice[],
    key: string,
    label?: string
}

export function adresseField(config: AddressFieldConfig): FormlyFieldConfig {
    return {
        key: config.key,
        fieldGroup: [
            {
                key: 'typeAdresse',
                type: 'select',
                defaultValue: config.adressesTypes[0].value,
                props: {
                    label: config.label ?? "Type d'adresse",
                    required: true,
                    options: config.adressesTypes
                },
            },
            {
                key: 'adresse',
                expressions: {
                    "props.disabled": (form: FormlyFieldConfig) => form?.parent?.model.typeAdresse !== 'SPECIFIQUE',
                    'hide': (form: FormlyFieldConfig) => form?.parent?.model.typeAdresse !== 'SPECIFIQUE'
                },
                fieldGroup: [
                    {
                        key: 'designation',
                        defaultValue: '',
                        type: 'input',
                        props: {
                            required: true,
                            label: 'Désignation',
                            placeholder: 'M. Jean Dupont',
                            maxLength: 32
                        },
                    },
                    {
                        key: 'street',
                        defaultValue: '',
                        type: 'input',
                        props: {
                            required: true,
                            label: 'Rue',
                            placeholder: '1 rue du lac',
                            maxLength: 32
                        },
                    },
                    {
                        key: 'complementaryInformations',
                        defaultValue: '',
                        type: 'input',
                        props: {
                            required: false,
                            label: "Complément d'adresse",
                            placeholder: 'BAT 1',
                            maxLength: 32
                        },
                    },
                    {
                        key: 'postalBox',
                        defaultValue: '',
                        type: 'input',
                        props: {
                            required: false,
                            label: 'Boîte postale',
                            placeholder: 'BP1234',
                            maxLength: 32
                        },
                    },
                    {
                        fieldGroupClassName: 'row',
                        fieldGroup: [
                            {
                                key: 'postalCode',
                                defaultValue: config.postalCodes[0].value,
                                type: 'select',
                                className: 'col-1',
                                props: {
                                    required: true,
                                    label: 'Code Postal',
                                    options: config.postalCodes
                                },
                            },
                            {
                                key: 'city',
                                defaultValue: '',
                                className: 'col-11',
                                type: 'input',
                                props: {
                                    required: true,
                                    label: 'Ville',
                                    placeholder: 'Paris',
                                    maxLength: 32
                                },
                            }
                        ]
                    }

                ]
            }
        ]
    }
}