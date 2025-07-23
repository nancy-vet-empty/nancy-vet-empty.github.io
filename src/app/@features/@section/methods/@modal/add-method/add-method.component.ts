import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Method } from 'ionicons/dist/types/stencil-public-runtime';

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
    usage: '',
    materials: [''], // separate from steps
    method: [''], // separate from steps
    steps: ['']      // separate from materials
  };

  // Called when user adds a material
  addMaterial() {
    this.form.materials.push('');
  }

  // Called when user removes a material
  removeMaterial(index: number) {
    if (this.form.materials.length > 1) {
      this.form.materials.splice(index, 1);
    }
  }

  // Called when user adds a step
  addStep() {
    this.form.steps.push('');
  }

  // Called when user removes a step
  removeStep(index: number) {
    if (this.form.steps.length > 1) {
      this.form.steps.splice(index, 1);
    }
  }

  constructor(private modalCtrl: ModalController) {}

  // Example dismiss and save methods
  dismiss() {
    // your dismiss logic
    this.modalCtrl.dismiss();
  }

  save() {
    // your save logic
    if (!this.form.title || !this.form.type) {
      alert('Моля, попълнете всички задължителни полета.');
      return;
    }
    this.modalCtrl.dismiss(this.form);
    console.log(this.form);
  }

  typeOptions = [
     { label: 'кръв',       value: 'blood'},
     { label: 'фекалии',    value: 'feces'},
     { label: 'урина',      value: 'urine'},
     { label: 'кожа',       value: 'skin' },
     { label: 'уши',        value: 'ears' },
     { label: 'друго',      value: 'other'}
  ]


}
