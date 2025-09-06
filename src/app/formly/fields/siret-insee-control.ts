import { FormlyFieldConfig } from "@ngx-formly/core";

export interface SiretInseeControlConfig {
    key?: string;
    readonly?: boolean
}

export function siretInseeField({
    key = 'siretInseeControl',
    readonly = false,
    ...rest
}: SiretInseeControlConfig): FormlyFieldConfig {
    return {
        key,
        type: 'checkbox',
        defaultValue: false,
        props: {
            label: 'Ne pas appliquer le contrôle INSEE',
            readonly
        },
    }
}