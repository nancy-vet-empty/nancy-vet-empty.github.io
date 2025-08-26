import { Component, OnInit, inject  } from "@angular/core";
import { ModalController, NavParams } from '@ionic/angular';
import { PatientDataService         } from 'nv@services/patients-data.service';
import  PatientsCollectionJson        from "nv@json/patients/patients.collection.json";
import { DrugInfoModal              } from '../../../../library/diseases/@modal/drug-info/drug-info.component';
import { DiseasesService            } from 'nv@services/disease.service';
import { AddDiseaseModalComponent   } from '../../../../library/diseases/@modal/add-disease/add-disease.component';

@Component({
  selector: 'modal--patient-record',
  templateUrl: './patient-record.component.html',
  styleUrl: './patient-record.component.scss'
})
export class PatientRecordModal implements OnInit {

  private modalController: ModalController = inject(ModalController);
  private $patientDataService: PatientDataService = inject(PatientDataService);
  private diseasesService: DiseasesService = inject(DiseasesService);

  public pet_id!: number;
  public patient: any;
  public protocols: any[] = [];
  public selectedObject: any; // The chosen patient
  public patientProtocols: any[] = [];
  public allProtocols: any[] = this.$patientDataService.$protocols().getAllprotocols();
  public results: any[] = [];
  public allResults: any[] = this.$patientDataService.$results().getAllresults();
  public patientResults: any[] = [];

  showForm: boolean = false;

  newProtocol: any = {
    temperature: '',
    weight: '',
    anamnesis: '',
    clinical_signs: '',
    examination: '',
    diagnosis: '',
    treatment: '',
    medications: '',
    manipulations: '',
    differential_diagnosis: ''
  };

  constructor(private navParams: NavParams) {}

  ngOnInit() {
    this.pet_id = this.navParams.get('pet_id');
    //console.log("Received pet_id:", this.pet_id); //it's undefined, but working

    this.loadPatient();
    this.loadProtocols();
    this.loadResults();
  }

  loadPatient() {
    this.patient = PatientsCollectionJson.find(p => p.pet_id === this.pet_id);
    //console.log("Loaded patient:", this.patient); //it's undefined, but working
  }

  public loadProtocols() {
    if (!this.selectedObject || !this.selectedObject.protocols) {
      console.warn("⚠️ No protocols found for this patient.");
      return;
    }

    // console.log("📋 Selected patient's protocol IDs:", this.selectedObject.protocols);
    // console.log("📂 All protocols before filtering:", this.allProtocols);

    // Ensure allProtocols is properly loaded before filtering
    if (!this.allProtocols || !Array.isArray(this.allProtocols)) {
      console.error("❌ Error: allProtocols is undefined or not an array.");
      return;
    }

    // Convert `protocol_number` to string for correct comparison
    this.patientProtocols = this.allProtocols.filter(protocol => {
      if (!protocol || typeof protocol.protocol_number === 'undefined') {
        console.warn("⚠️ Skipping an undefined or missing protocol:", protocol);
        return false;
      }

      // No need for .toString() now
      return this.selectedObject.protocols.includes(Number(protocol.protocol_number));
    });


    // console.log("🔍 Type of protocol IDs in selectedObject:", typeof this.selectedObject?.protocols?.[0]);
    // console.log("🔍 Type of protocol numbers in allProtocols:", typeof this.allProtocols?.[0]?.protocol_number);
    // console.log("✅ Filtered protocols:", this.patientProtocols);
  }

  public loadResults() {
    if (!this.selectedObject || !this.selectedObject.results) {
      console.warn("⚠️ No results found for this patient.");
      return;
    }

    console.log("📋 Selected patient's result IDs:", this.selectedObject.results);
    console.log("📂 All results before filtering:", this.allResults);

    // Ensure allResults is properly loaded before filtering
    if (!this.allResults || !Array.isArray(this.allResults)) {
      console.error("❌ Error: allResults is undefined or not an array.");
      return;
    }

    // Convert `protocol_number` to string for correct comparison
    this.patientResults = this.allResults.filter(result => {
      if (!result || typeof result.result_number === 'undefined') {
        console.warn("⚠️ Skipping an undefined or missing result:", result);
        return false;
      }

      // No need for .toString() now
      return this.selectedObject.results.includes(Number(result.result_number));
    });


    console.log("🔍 Type of result IDs in selectedObject:", typeof this.selectedObject?.results?.[0]);
    console.log("🔍 Type of result numbers in allResults:", typeof this.allResults?.[0]?.result_number);
    console.log("✅ Filtered results:", this.patientResults);
  }

  onConfirm() {
    this.modalController.dismiss();
  }

  onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }

  public selectedProtocol: any = null;

  openProtocol(protocol: any) {
    // Toggle protocol details (click again to close)
    this.selectedProtocol = this.selectedProtocol === protocol ? null : protocol;
  }


  public selectedResult: any = null;

  openResult(result: any) {
    // Toggle result details (click again to close)
    this.selectedResult = this.selectedResult === result ? null : result;
  }

public addProtocol() {
  // Example: emit event, open modal, or navigate
  console.log('Add protocol clicked');
  // You might open a modal or call a service to create a new protocol
}

// ADD PROTOCOL

  openProtocolForm() {
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
  }

  saveProtocol() {
    const newProtocolNumber = this.protocols.length;
    const today = new Date().toISOString().split('T')[0];

    const newProtocol = {
      ...this.newProtocol,
      protocol_number: newProtocolNumber,
      protocol_creation_date: today,
      // protocol_modification_date: '',
      // protocol_completion_date: '',
      pet_id: this.patient.pet_id,
      symptoms: this.newProtocol.symptoms.split(',').map((m: string) => m.trim()),
      medications: this.newProtocol.medications.split(',').map((m: string) => m.trim()),
      manipulations: this.newProtocol.manipulations.split(',').map((m: string) => m.trim()),
    };

    this.protocols.push(newProtocol);
    this.patient.protocols.push(newProtocolNumber);

    // Reset form
    this.newProtocol = {
      temperature: '',
      weight: '',
      anamnesis: '',
      clinical_signs: '',
      examination: '',
      diagnosis: '',
      treatment: '',
      medications: '',
      manipulations: '',
      differential_diagnosis: ''
    };

    this.showForm = false;
  }

  public getAnimalTypeLabel(type: string | null): string {
    const map: { [key: string]: string } = {
      cat: 'котка',
      dog: 'куче',
      rabbit: 'заек',
      guineapig: 'морско свинче'
    };

    //console.log(`animalType: ${type}`);

    return type && map[type] ? map[type] : '';
  }

  // DISEASE MODAL = DrugInfoModal fron folder Diseases

// async openDiseaseInfo(diseaseTitle: any) {
//   let title = '';

//   if (typeof diseaseTitle === 'string') {
//     title = diseaseTitle;
//   } else if (Array.isArray(diseaseTitle) && diseaseTitle.length > 0) {
//     title = diseaseTitle[0]; // Fallback just in case
//   }

//   console.log('Searching for disease title:', title);

//   const matchedDisease = this.diseasesService
//     .select()
//     .filterByTitle(title)
//     .get();

//   if (!matchedDisease || matchedDisease.length === 0) {
//     console.warn('❗ Disease not found in collection:', title);
//     return;
//   }

//   const modal = await this.modalController.create({
//     component: DrugInfoModal,
//     componentProps: {
//       selectedObject: matchedDisease[0]
//     },
//   });

//   return await modal.present();
// }

async openDiseaseInfo(diseaseTitle: string) {
  if (!diseaseTitle) return;

  const matchedDisease = this.diseasesService
    .select()
    .filterByTitle(diseaseTitle)
    .get();

  if (!matchedDisease || matchedDisease.length === 0) {
    console.warn('❗ Disease not found in collection:', diseaseTitle);

    const addModal = await this.modalController.create({
      component: AddDiseaseModalComponent,
      componentProps: {
        form: {
          title: diseaseTitle // prefill with the searched title
        }
      }
    });

    addModal.onDidDismiss().then((res) => {
      if (res.data) {
        console.log('✅ New disease created:', res.data);
        // TODO: Save to collection (optional)
        // Optionally, open modal with the new data:
        this.modalController.create({
          component: DrugInfoModal,
          componentProps: {
            selectedObject: res.data
          }
        }).then(modal => modal.present());
      }
    });

    return await addModal.present();
  }

  // If found — open the existing disease modal
  const modal = await this.modalController.create({
    component: DrugInfoModal,
    componentProps: {
      selectedObject: matchedDisease[0]
    },
  });

  return await modal.present();
}






}
