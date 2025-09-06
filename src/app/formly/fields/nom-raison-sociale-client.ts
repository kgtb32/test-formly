import { FormlyFieldConfig } from "@ngx-formly/core";

export interface NomRaisonSocialeClientConfig {
    key?: string;

}

export function nomRaisonSocialeClientField({
    key = 'nameOrSocialReason',
    ...rest
}: NomRaisonSocialeClientConfig): FormlyFieldConfig {
    return {
        key,
        type: 'input',
        defaultValue: '',
        props: {
            label: 'Nom ou raison sociale du client',
            maxLength: 20,
            required: true,
        },
    }
}