import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ConfigOption, provideFormlyCore } from '@ngx-formly/core';
import { withFormlyBootstrap } from '@ngx-formly/bootstrap';
import { routes } from './app.routes';

const config: ConfigOption[] = [
  ...withFormlyBootstrap(),
  {
    validationMessages: [
      { name: 'required', message: 'Ce champ est requis.' },
      { name: 'pattern', message: 'Ce champ est invalide.' }
    ],
  }
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFormlyCore(config),
  ],
};
