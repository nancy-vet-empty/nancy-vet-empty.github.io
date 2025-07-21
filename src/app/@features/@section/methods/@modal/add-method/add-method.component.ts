import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-method',
  templateUrl: './add-method.component.html',
  styleUrls: ['./add-method.component.scss']
})
export class AddMethodModalComponent {
  form = {
    title: '',
    titleEn: '',
    type: '',
    description: '',
    materials: '',
    method: '',
    usage: ''
  };

  typeOptions = [
     { label: 'кръв',       value: 'blood'},
     { label: 'фекалии',    value: 'feces'},
     { label: 'урина',      value: 'urine'},
     { label: 'кожа',       value: 'skin' },
     { label: 'уши',        value: 'ears' },
     { label: 'друго',      value: 'other'}
  ]

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  save() {
    if (!this.form.title || !this.form.type) {
      alert('Моля, попълнете всички задължителни полета.');
      return;
    }
    this.modalCtrl.dismiss(this.form);
  }

}
