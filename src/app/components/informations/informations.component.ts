import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { nomRaisonSocialeClientField } from '../../formly/fields/nom-raison-sociale-client';
import { sirenField } from '../../formly/fields/siren';
import { juridicalPersonalityField } from '../../formly/fields/juridical-personality';
import { personNumberField } from '../../formly/fields/person-number';
import { legalRepresentativeField } from '../../formly/fields/legal-representative';
import { rcsImmatriculationField } from '../../formly/fields/rcs-immatriculation';
import { rcsNumberField } from '../../formly/fields/rcs-number';
import { communityTvaNumberField } from '../../formly/fields/comunity-tva-number';
import { enseignePointDeVenteField } from '../../formly/fields/enseigne-pdv';
import { siretField, siretGroup } from '../../formly/fields/siret';
import { siretInseeField } from '../../formly/fields/siret-insee-control';
import { BankingClientNumberField } from '../../formly/fields/banking-client';
import { marketField } from '../../formly/fields/market';
import { naf2008Field } from '../../formly/fields/naf-2008';
import { mccField } from '../../formly/fields/mcc';
import { establishementManagerField } from '../../formly/fields/establishement-manager';
import { adresseField } from '../../formly/fields/adresse';
import { phoneField } from '../../formly/fields/phone-number';
import { emailField } from '../../formly/fields/email';

@Component({
  selector: 'app-informations',
  imports: [FormlyModule, ReactiveFormsModule],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent {

  typesAddresses = [
    { value: 'IDENTIQUE_POINT_DE_VENTE', label: 'Identique point de vente' },
    { value: 'SPECIFIQUE', label: 'Spécifique' },
    { value: 'IDENTIQUE_ADRESSE_LIVRAISON', label: 'Identique adresse livraison' },
  ]

  codesPostaux = Array(95).fill(0).map((_, i) => ({ value: i.toString(), label: `${i}` }))

  form = new FormGroup({});
  model = {
    personNumber: 12345678,
    siret: {
      siret: 45678901,
    }
  }
  fields: FormlyFieldConfig[] = [
    nomRaisonSocialeClientField({}),
    sirenField({}),
    juridicalPersonalityField({}),
    personNumberField({ readonly: true }),
    legalRepresentativeField({}),
    rcsImmatriculationField({}),
    rcsNumberField({}),
    communityTvaNumberField({}),
    {
      type: 'input',
      props: {
        label: 'Point de vente',
        disabled: true,
      }
    },
    enseignePointDeVenteField({}),
    siretGroup({
      siretRequired: true
    }),
    siretInseeField({}),
    BankingClientNumberField({ required: true }),
    marketField({}),
    naf2008Field({}),
    mccField({}),
    establishementManagerField({}),
    adresseField({
      adressesTypes: this.typesAddresses,
      postalCodes: this.codesPostaux,
      key: 'establishementAddress',
      label: 'Adresse du point de vente'
    }),
    phoneField({
      key: 'mobile',
      label: "Téléphone mobile",
      expressions: {
        'props.required': '!model.phone'
      }
    }),
    phoneField({
      key: 'phone',
      label: "Téléphone fixe",
      expressions: {
        'props.required': '!model.mobile'
      }
    }),
    emailField({}),
    adresseField({
      adressesTypes: this.typesAddresses,
      postalCodes: this.codesPostaux,
      key: 'legalEntityAddress',
      label: "Adresse de l'entité juridique",
    })
  ]

  onSubmit(model: any) {
    console.log(model);
  }

  toJson() {
    return JSON.stringify(this.model);
  }
}
