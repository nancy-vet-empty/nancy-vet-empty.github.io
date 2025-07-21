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
        { label: 'infectious'      , value: 'Инфекциозни заболявания'},
        { label: 'parasitic'       , value: 'Паразитни заболявания'},
        { label: 'neoplasms'       , value: 'Новообразувания'},
        { label: 'blood'           , value: 'Болести на кръвта и имунната система'},
        { label: 'nervous'         , value: 'Болести на нервната система'},
        { label: 'eye'             , value: 'Болести на окото'},
        { label: 'ear'             , value: 'Болести на ухото'},
        { label: 'mental'          , value: 'Поведенчески разстройства'},
        { label: 'endocrine'       , value: 'Болести на ендокринната система'},
        { label: 'circulatory'     , value: 'Болести на кръвообращението'},
        { label: 'respiratory'     , value: 'Болести на дихателната система'},
        { label: 'digestive'       , value: 'Болести на храносмилателната система'},
        { label: 'skin'            , value: 'Болести на кожата'},
        { label: 'muskuloskeletal' , value: 'Болести на костно-мускулната система'},
        { label: 'genitourinary'   , value: 'Болести на пикочо-половата система'},
        { label: 'pregnancy'       , value: 'Бременност и раждане'},
        { label: 'congenital'      , value: 'Вродени аномалии'},
        { label: 'injuries'        , value: 'Травми и отравяния'}
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
