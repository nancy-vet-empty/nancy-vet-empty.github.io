import { Component, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PatientDataService } from 'nv@services/patients-data.service';

@Component({
  selector: 'modal--create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent {
  private modalController: ModalController = inject(ModalController);
  private $patientDataService: PatientDataService = inject(PatientDataService);

  public newPatient: any = {
    pet_name: '',
    animalType: '',
    breed: '',
    sex: '',
    age: '',
    neutered: false,
    owner_name: '',
    address: '',
    protocols: [],
    results: [],
    pets_diseases: []
  };

  savePatient() {
    const allPatients = this.$patientDataService.$patients().getAllPatients();

    const newId = allPatients.length > 0
      ? Math.max(...allPatients.map(p => p.pet_id)) + 1
      : 1;

    const patientToSave = {
      ...this.newPatient,
      pet_id: newId
    };

    this.$patientDataService.$patients().addPatient(patientToSave);
    this.modalController.dismiss();
  }
}
