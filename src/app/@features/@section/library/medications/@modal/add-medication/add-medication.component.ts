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
    { label: 'Храносмилателна система',  value: 'gastrointestinal' },
    { label: 'Сърдечно-съдова система',  value: 'cardiovascular' },
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
