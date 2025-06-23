import { FormlyFieldConfig } from "@ngx-formly/core";
import { Observable } from "rxjs";

export type FieldExpression<T> = string | ((field: FormlyFieldConfig) => T) | Observable<T>;