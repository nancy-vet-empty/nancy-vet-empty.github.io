import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-deworming',
  templateUrl: './add-deworming.component.html',
  styleUrls: ['./add-deworming.component.scss']
})
export class AddDewormingModalComponent {
  form = {
    title: '',
    titleBG: '',
    typeDeworming: '',
    formTypes: '',
    animalType: '',
    activeSubstance: '',
    dosage: '',
    effect: '',
    killingActivity: '',
    indications: '',
    contraindications: '',
    precautions: '',
    pregnancy: '',
    link: ''
  };

  typeDewormingOptions = [

    { label: 'спрей'       ,  value: 'spray'},
    { label: 'каишка'      ,  value: 'leash'},
    { label: 'суспензия'   ,  value: 'suspension'},
    { label: 'пудра'       ,  value: 'powder'},
    { label: 'спот-он'     ,  value: 'spot-on'},
    { label: 'табл'        ,  value: 'tabl'},
  ];

  formTypeOptions = [
    { label: 'вътрешно',      value: 'internal'},
    { label: 'външно',        value: 'external'},
    { label: 'комбинирано',   value: 'both'}
  ]

  animalTypeOptions = [
    { label: 'Куче',          value: 'dog'  },
    { label: 'Котка',         value: 'cat'  },
    { label: 'Куче и котка',  value: 'both' }
  ];

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  save() {
    if (!this.form.titleBG || !this.form.typeDeworming || !this.form.formTypes || !this.form.animalType) {
      alert('Моля, попълнете всички задължителни полета.');
      return;
    }
    this.modalCtrl.dismiss(this.form);
  }

}
