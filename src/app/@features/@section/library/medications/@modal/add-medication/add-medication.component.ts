import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddMedicationModalComponent {
  form = {
    title: '',
    titleEn: '',
    activeSubstance: '',
    drugConcentration: '',
    drugConcentrationDecorator: '',
    activeSubstanceDose: '',
    activeSubstanceDoseDecorator: '',
    applicationMethod: '',
    administration: '',
    link: '',
    indications: '',
    contraindications: '',
    drugInteractions: '',
    adverseEffects: '',
    pharmacology: '',
    medicationTypes: '',     // e.g. 'respiratory', 'skin', etc.
    animalType: ''           // 'dog' or 'cat'
  };

  medicationTypeOptions = [
    { label: 'Дихателна система',        value: 'respiratory' },
    { label: 'Храносмилателна система',  value: 'digestive' },
    { label: 'Кръвоносна система',       value: 'circulatory' },
    { label: 'Пикочо-полова система',    value: 'urogenital' },
    { label: 'Нервна система',           value: 'nervous' },
    { label: 'Очи',                      value: 'eyes' },
    { label: 'Уши',                      value: 'ears' },
    { label: 'Кожа',                     value: 'skin' },
    { label: 'Антибиотици',              value: 'antibiotics' },
    { label: 'Противопаразитни',         value: 'antiparasitic' },
    { label: 'Ендокринна система',       value: 'endocrine' },
    { label: 'Противовъзпалителни',      value: 'antiinflammatory' },
    { label: 'Други',                    value: 'others' }
  ];

  animalTypeOptions = [
    { label: 'Куче',          value: 'dog'  },
    { label: 'Котка',         value: 'cat'  },
    { label: 'Куче и котка',  value: 'both' }
  ];

  public unitOptions = [

    {value: 'µg_ml'            , label: 'µg/ml'},
    {value: 'mg_ml'            , label: 'mg/ml'},
    {value: 'mg_tabl'          , label: 'mg/tabl'},
    {value: 'µg_tabl'          , label: 'µg/tabl'},

    {value: 'mg_caps'          , label: 'mg/caps'},

    {value: 'mg'               , label: 'mg'},
    {value: 'g'                , label: 'g'},
    {value: 'g_kg'             , label: 'g/kg'},
    {value: 'mg_kg'            , label: 'mg/kg'},
    {value: 'µg_kg'            , label: 'µg/kg'},
    {value: 'MU_kg'            , label: 'MU/kg'},
    {value: 'ml'               , label: 'ml'},
    {value: 'ml_kg'            , label: 'ml/kg'},
    {value: 'ml_4_kg'          , label: 'ml/4 kg'},
    {value: 'ml_4.5_kg'        , label: 'ml/4.5 kg'},
    {value: 'ml_5_kg'          , label: 'ml/5 kg'},
    {value: 'ml_10_kg'         , label: 'ml/10 kg'},
    {value: 'tabl'             , label: 'tabl'},
    {value: 'tabl_2.5_kg'      , label: 'tabl/2.5 kg'},
    {value: 'tabl_5_kg'        , label: 'tabl/5 kg'},
    {value: 'tabl_10_kg'       , label: 'tabl/10 kg'},
    {value: 'tabl_15_kg'       , label: 'tabl/15 kg'},
    {value: 'tabl_25_kg'       , label: 'tabl/25 kg'},
    {value: 'tabl_40_kg'       , label: 'tabl/40 kg'},
    {value: 'caps'             , label: 'caps'},
    {value: 'caps_5_kg'        , label: 'caps/5 kg'},
    {value: 'caps_10_kg'       , label: 'caps/10 kg'},
    {value: 'gtt'              , label: 'gtt'},
    {value: 'gtt_2_kg'         , label: 'gtt/2 kg'},
    {value: 'tbsp'             , label: 'с. л.'},
    {value: 'tsp'              , label: 'ч. л.'},
    {value: 'tsp_5_kg'         , label: 'ч. л. на 5 кг'},
    {value: 'cm'               , label: 'cm'},
    {value: 'implant'          , label: 'implant'},
    {value: 'ampula'           , label: 'ампула'},
    {value: 'sprays'           , label: 'sprays'},
    {value: 'малко количество' , label: 'малко количество'},
    {value: 'няколко капки'    , label: 'няколко капки'},
    {value: 'paketche'         , label: 'пакетче'}
  ]

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

save() {
  if (!this.form.title || !this.form.activeSubstance || !this.form.medicationTypes || !this.form.drugConcentration || !this.form.drugConcentrationDecorator || !this.form.medicationTypes || !this.form.animalType || !this.form.activeSubstanceDose || !this.form.activeSubstanceDoseDecorator || !this.form.applicationMethod) {
    alert('Моля, попълнете всички задължителни полета.');
    return;
  }

  this.modalCtrl.dismiss(this.form);
}

}
