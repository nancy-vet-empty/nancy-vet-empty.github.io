import { Component, inject, OnInit } from "@angular/core";
import { ModalController, NavParams } from '@ionic/angular';
import { PatientRecordModal } from "../../../../patients-library/patients/@modal/patient-record/patient-record.component";
import { PatientDataService } from "nv@services/patients-data.service";
import patientsData from 'nv@json/patients/patients.collection.json';
import protocolsData from 'nv@json/patients/protocols.collection.json';

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrl    : './drug-info.component.scss'
})
export class DrugInfoModal implements OnInit {

  private modalController = inject(ModalController);
  private navParams = inject(NavParams);
  private patientDataService = inject(PatientDataService);

  public selectedObject: any;
  public selectedDrugApplicationCollection: any[] = [];

  // 🟢 These were missing:
  public symptomName!: string;
  public relatedPatients: any[] = [];

  // ngOnInit() {
  //   // 🟡 Get data from the modal input
  //   this.selectedObject = this.navParams.get('selectedObject');
  //   this.symptomName = this.selectedObject?.symptom || "Unknown symptom";

  //   const allPatients = this.patientDataService.$patients().getAllPatients();

  //   // Step 1: Find protocols with this symptom in clinical_signs
  //   const matchingProtocols = protocolsData.filter(protocol =>
  //     protocol.clinical_signs &&
  //     Array.isArray(protocol.clinical_signs) &&
  //     protocol.clinical_signs.includes(this.symptomName)
  //   );

  //   const matchingPetIds = [...new Set(matchingProtocols.map(p => p.pet_id))];

  //   // Step 2: Get patients with those pet_id
  //   this.relatedPatients = patientsData.filter(patient =>
  //     matchingPetIds.includes(patient.pet_id)
  //   );
  // }

  ngOnInit() {
    this.selectedObject = this.navParams.get('selectedObject');
    this.symptomName = this.selectedObject?.symptom?.toLowerCase().trim() || "";

    const symptomLower = this.symptomName;

    // Normalize and match clinical signs
    const matchingProtocols = protocolsData.filter(protocol => {
      return Array.isArray(protocol.clinical_signs) && protocol.clinical_signs.some(sign => {
        return sign && sign.toLowerCase().trim() === symptomLower;
      });
    });

    const matchingPetIds = [...new Set(matchingProtocols.map(p => p.pet_id))];

    this.relatedPatients = patientsData.filter(patient =>
      matchingPetIds.includes(patient.pet_id)
    );

    console.log("Looking for:", symptomLower);
    console.log("Matched protocols:", matchingProtocols);
    console.log("Matched patient IDs:", matchingPetIds);
    console.log("Related patients:", this.relatedPatients);

  }


  public onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }

  public onOpenLink(url: string) {
    window.open(url, '_blank')?.focus();
  }

  // Open the PATIENT record  in the SYMPTOM INFO modal
  async openPatientInfo(pet_id: number) {
    const patient = patientsData.find(p => p.pet_id === pet_id);
    if (!patient) {
      console.error('Patient not found!');
      return;
    }

  const modal = await this.modalController.create({
    component: PatientRecordModal,
    componentProps: {
      selectedObject: patient
    }
  });
  await modal.present();
  }
}
