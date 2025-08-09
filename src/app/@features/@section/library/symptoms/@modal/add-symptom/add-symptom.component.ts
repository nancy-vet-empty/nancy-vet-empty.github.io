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
    symptomType: '',
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

  // Renamed and updated to work with 'form.causes'
  addCauseGroup() {
    this.form.causes.push({ group: '', children: [{ title: '' }] }); // Start with one child reason
  }

  // Renamed and updated to work with 'form.causes'
  removeCauseGroup(index: number) {
    this.form.causes.splice(index, 1);
  }

  // Renamed and updated to work with 'form.causes'
  addCauseChild(mainIndex: number) {
    this.form.causes[mainIndex].children.push({ title: '' });
  }

  // Renamed and updated to work with 'form.causes'
  removeCauseChild(mainIndex: number, childIndex: number) {
    this.form.causes[mainIndex].children.splice(childIndex, 1);
  }

  // 'addCause' and 'removeCause' from your original code are now effectively 'addCauseGroup' and 'removeCauseGroup'
  // You can remove the old 'addCause' and 'removeCause' if you renamed them.
  // If you keep them, ensure they are correctly used in the template.
  // For clarity, I've used 'addCauseGroup' and 'removeCauseGroup' consistently.
}
