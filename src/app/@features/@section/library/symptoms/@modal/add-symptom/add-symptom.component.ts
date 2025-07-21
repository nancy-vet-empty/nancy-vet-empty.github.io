import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-symptom',
  templateUrl: './add-symptom.component.html',
  styleUrls: ['./add-symptom.component.scss']
})
export class AddSymptomModalComponent {
  form = {
    title: '',
    titleEn: '',
    diseaseType: '',
    symptomType: '', // ✅ This was missing, causing template error
    animals: '',
    causes: [
      {
        group: '',
        children: [
          { title: '' },
          { title: '' }
        ]
      }
    ] as {
      group: string;
      children: { title: string }[];
    }[]
  };

  symptomTypeOptions = [
    { label: 'infectious', value: 'Инфекциозни заболявания' },
    { label: 'parasitic', value: 'Паразитни заболявания' },
    { label: 'neoplasms', value: 'Новообразувания' },
    { label: 'blood', value: 'Болести на кръвта и имунната система' },
    { label: 'nervous', value: 'Болести на нервната система' },
    { label: 'eye', value: 'Болести на окото' },
    { label: 'ear', value: 'Болести на ухото' },
    { label: 'mental', value: 'Поведенчески разстройства' },
    { label: 'endocrine', value: 'Болести на ендокринната система' },
    { label: 'circulatory', value: 'Болести на кръвообращението' },
    { label: 'respiratory', value: 'Болести на дихателната система' },
    { label: 'digestive', value: 'Болести на храносмилателната система' },
    { label: 'skin', value: 'Болести на кожата' },
    { label: 'muskuloskeletal', value: 'Болести на костно-мускулната система' },
    { label: 'genitourinary', value: 'Болести на пикочо-половата система' },
    { label: 'pregnancy', value: 'Бременност и раждане' },
    { label: 'congenital', value: 'Вродени аномалии' },
    { label: 'injuries', value: 'Травми и отравяния' }
  ];

  reasons: { mainReason: string; childReasons: string[] }[] = [];

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  save() {
    if (!this.form.title || !this.form.animals || !this.form.diseaseType) {
      alert('Моля, попълнете всички задължителни полета.');
      return;
    }
    this.modalCtrl.dismiss(this.form);
  }

  addMainReason() {
    this.reasons.push({ mainReason: '', childReasons: [] });
  }

  removeMainReason(index: number) {
    this.reasons.splice(index, 1);
  }

  addChildReason(mainIndex: number) {
    this.reasons[mainIndex].childReasons.push('');
  }

  removeChildReason(mainIndex: number, childIndex: number) {
    this.reasons[mainIndex].childReasons.splice(childIndex, 1);
  }

  addCause() {
    this.form.causes.push({
      group: '',
      children: []
    });
  }

  removeCause(index: number) {
    this.form.causes.splice(index, 1);
  }

  addChild(mainIndex: number) {
    this.form.causes[mainIndex].children.push({ title: '' });
  }

  removeChild(mainIndex: number, childIndex: number) {
    this.form.causes[mainIndex].children.splice(childIndex, 1);
  }
}
