import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ribVersementAndPrelevementField, RibWithUserInfo } from '../../formly/fields/rib-versement-prelevement';
import { adresseField } from '../../formly/fields/adresse';

@Component({
  selector: 'app-test-form',
  imports: [FormlyModule, ReactiveFormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})
export class TestFormComponent {
  numContratRequis: boolean = true;
  estTresorPublic: boolean = false;
  listRibMode: boolean = true;

  ribList: RibWithUserInfo[] = [
    {
      bankCode: '30001',
      deskId: '00794',
      accountNumber: '12345678901',
      key: '85',
      holderInfos: 'John doe'
    },
    {
      bankCode: '30002',
      deskId: '00795',
      accountNumber: '12345678902',
      key: '14',
      holderInfos: 'John doe tester'
    }
  ]

  typesAddresses = [
    { value: 'IDENTIQUE_POINT_DE_VENTE', label: 'Identique point de vente' },
    { value: 'SPECIFIQUE', label: 'Spécifique' },
    { value: 'IDENTIQUE_ADRESSE_LIVRAISON', label: 'Identique adresse livraison' },
  ]

  codesPostaux = Array(95).fill(0).map((_, i) => ({ value: i.toString(), label: `${i}` }))

  form = new FormGroup({});
  model = {
    ribVersement: {
      bankCode: '30002',
      deskId: '00795',
      accountNumber: '12345678902',
      key: '14',
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'numContrat',
      type: 'number',
      defaultValue: '',
      props: {
        label: 'test',
        placeholder: '1234',
      },
      expressions: {
        'props.required': this.numContratRequis.toString(),
        'props.disabled': (!this.numContratRequis).toString(),
        'hide': (!this.numContratRequis).toString(),
        'props.label': () => this.estTresorPublic ? "Numéro de trésor public" : "Numéro d'acceptation",
      }
    },
    {
      key: 'dateOuverture',
      type: 'input',
      defaultValue: '',
      props: {
        attributes: {
          'type': 'date'
        },
        label: 'date ouverture'
      },
    },
    ribVersementAndPrelevementField({
      mode: this.listRibMode ? 'list' : 'normal',
      ribList: this.ribList,
    }),
    adresseField({
      key: 'adressePdv',
      adressesTypes: this.typesAddresses,
      postalCodes: this.codesPostaux
    }),
    adresseField({
      key: 'adresseEntiteJuridique',
      adressesTypes: this.typesAddresses,
      postalCodes: this.codesPostaux
    })
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
