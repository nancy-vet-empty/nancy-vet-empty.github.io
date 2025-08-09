import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.scss']
})
export class AddDiseaseModalComponent {
  form = {
    title: '',
    titleEn: '',
    diseaseType: '',
    animals: '',
    etiology: '',
    signs: '',
    specificSigns: '',
    diagnostics: '',
    treatment: '',
    differential: ''
  };

  diseaseTypeOptions = [
    { label: 'Инфекциозни заболявания'              , value: 'infectious' },
    { label: 'Паразитни заболявания'                , value: 'parasitic' },
    { label: 'Новообразувания'                      , value: 'neoplasms' },
    { label: 'Болести на кръвта и имунната система' , value: 'blood' },
    { label: 'Болести на нервната система'          , value: 'nervous' },
    { label: 'Болести на окото'                     , value: 'eye' },
    { label: 'Болести на ухото'                     , value: 'ear' },
    { label: 'Поведенчески разстройства'            , value: 'mental' },
    { label: 'Болести на ендокринната система'      , value: 'endocrine' },
    { label: 'Болести на кръвообращението'          , value: 'circulatory' },
    { label: 'Болести на дихателната система'       , value: 'respiratory' },
    { label: 'Болести на храносмилателната система' , value: 'digestive' },
    { label: 'Болести на кожата'                    , value: 'skin' },
    { label: 'Болести на костно-мускулната система' , value: 'muskuloskeletal' },
    { label: 'Болести на пикочо-половата система'   , value: 'genitourinary' },
    { label: 'Бременност и раждане'                 , value: 'pregnancy' },
    { label: 'Вродени аномалии'                     , value: 'congenital' },
    { label: 'Травми и отравяния'                   , value: 'injuries' }
  ];

  animalsOptions = [
    { label: 'Куче',          value: 'dog'  },
    { label: 'Котка',         value: 'cat'  },
    { label: 'Куче и котка',  value: 'both' }
  ];

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

save() {
  if (!this.form.title || !this.form.animals || this.form.diseaseType) {
    alert('Моля, попълнете всички задължителни полета.');
    return;
  }

  this.modalCtrl.dismiss(this.form);
}

}
