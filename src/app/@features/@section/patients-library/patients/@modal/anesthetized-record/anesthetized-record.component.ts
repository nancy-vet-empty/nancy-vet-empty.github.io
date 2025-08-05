import { Component, OnInit, inject  } from "@angular/core";
import { ModalController, NavParams } from '@ionic/angular';
import { PatientDataService         } from 'nv@services/patients-data.service';
import  AnesthetizedCollectionJson    from "nv@json/patients/anesthetized.collection.json";
import { DrugInfoModal              } from '../../../../library/diseases/@modal/drug-info/drug-info.component';
import { DiseasesService            } from 'nv@services/disease.service';
import { AddDiseaseModalComponent   } from '../../../../library/diseases/@modal/add-disease/add-disease.component';

@Component({
  selector: 'modal--anesthetized-record',
  templateUrl: './anesthetized-record.component.html',
  styleUrl: './anesthetized-record.component.scss'
})
export class AnesthetizedRecordModal implements OnInit {

  private modalController: ModalController = inject(ModalController);
  private $patientDataService: PatientDataService = inject(PatientDataService);
  private diseasesService: DiseasesService = inject(DiseasesService);

  public anesthetized_id!: number;
  public anesthetized_name!: any;
  public sex!: any;
  public breed!: any;
  public asa_status!: number;
  public diseases: any[] = [];

  public procedure_date!: any;
  public procedure_type!: any;
  public procedure_duration!: any;

  public drug_induction_type: any[] = [];
  public drug_induction_description!: any;
  public drug_maintenance_type: any[] = [];
  public drug_maintenance_description!: any;
  public other_medications: any[] = [];
  public endotracheal_tube!: number;
  public anesthesia_complications!: any;
  public anesthesia_interventions!: any;

  public recovery_duration!: any;
  public recovery_quality!: any;
  public recovery_complications!: any;
  public notes!: any;
  public self_assessment!: any;


  public patient: any;
  public selectedObject: any; // The chosen patient

  showForm: boolean = false;

  constructor(private navParams: NavParams) {}

  ngOnInit() {
    this.anesthetized_id = this.navParams.get('anesthetized_id');
    //console.log("Received anesthetized_id:", this.anesthetized_id); //it's undefined, but working

    this.loadPatient();
  }

  loadPatient() {
    this.patient = AnesthetizedCollectionJson.find(p => p.anesthetized_id === this.anesthetized_id);
    //console.log("Loaded patient:", this.patient); //it's undefined, but working
  }

  onConfirm() {
    this.modalController.dismiss();
  }

  onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
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
