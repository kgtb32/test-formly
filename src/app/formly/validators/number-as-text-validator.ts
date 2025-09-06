import { AbstractControl } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

function numberAsTextValidator(c: AbstractControl, form: FormlyFieldConfig) {
    const length = c?.value?.toString()?.length ?? 0;
    const maxLength = form.props?.maxLength ?? 0
    return length <= maxLength
}


function numberAsTextErrorMessage(_error: unknown, field: FormlyFieldConfig) {
    return `Ce champ ne doit pas excéder ${field?.props?.maxLength} caractères`
}

export const numberAsTextValidatorRef = {
    numberAsText: {
        expression: numberAsTextValidator,
        message: numberAsTextErrorMessage,
    },
}