import { Component, OnInit, inject  } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DialogService      } from "nv@services/dialog.service";
import { GalleryModal       } from "../gallery/gallery.component";
import { PatientRecordModal } from '../../../../patients-library/patients/@modal/patient-record/patient-record.component';
import patientsData from 'nv@json/patients/patients.collection.json';
import protocolsData from 'nv@json/patients/protocols.collection.json';

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrl    : './drug-info.component.scss'
})
export class DrugInfoModal implements OnInit {

  private modalController: ModalController  = inject(ModalController);
  private dialogService: DialogService      = inject(DialogService);
  private navParams: NavParams            = inject(NavParams);

  public selectedObject: any;
  public selectedObjectApplicationCollection: any[] = [];

  ngOnInit() {
    this.selectedObject = this.navParams.get('selectedObject');
    this.diseaseName = this.selectedObject?.title; // Assuming the disease name is in 'name'
    // console.log('Disease Name:', this.selectedObject);


    if (!this.diseaseName) return;

    const diseaseNameLower = this.diseaseName.toLowerCase().trim();
    const diseaseNameEnLower = this.selectedObject?.titleEn?.toLowerCase().trim();

    // Find patients that have the disease in their `pets_diseases` array
    this.relatedPatients = patientsData.filter(patient => {
      if (!patient.pets_diseases || !Array.isArray(patient.pets_diseases)) {
        return false;
      }

      // Check if any of the patient's diseases match the current disease (Cyrillic or Latin)
      return patient.pets_diseases.some(d => {
        const patientDiseaseLower = d.toLowerCase().trim();
        return patientDiseaseLower.includes(diseaseNameLower) ||
               (diseaseNameEnLower && patientDiseaseLower.includes(diseaseNameEnLower));
      });
    });

    // console.log("Matched protocols:", matchingProtocols);
    // console.log("Matched patient IDs:", matchingPetIds);
    // console.log("Related patients:", this.relatedPatients);
  }

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }

  /**
   * @author Mihail Petrov
   * @param url
   */
  public onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }

  public renderVideo(tag: string) {
    return tag.replace("$", "");
  }

  public renderImage(tag: string) {
    return tag.replace("@", "");
  }

      /**
   * @author Mihail Petrov
   */
      public async onGalleryOpen() {

        (await this.dialogService.open(GalleryModal, {
          selectedObject: this.selectedObject.gallery
        }));
      }

      public getTitle() {

        if(this.selectedObject?.type == 'infectious'      ) return `Инфекциозни заболявания`;
        if(this.selectedObject?.type == 'parasitic'       ) return `Паразитни заболявания`;
        if(this.selectedObject?.type == 'neoplasms'       ) return `Новообразувания`;
        if(this.selectedObject?.type == 'blood'           ) return `Болести на кръвта и имунната система`;
        if(this.selectedObject?.type == 'nervous'         ) return `Болести на нервната система`;
        if(this.selectedObject?.type == 'eye'             ) return `Болести на окото`;
        if(this.selectedObject?.type == 'ear'             ) return `Болести на ухото`;
        if(this.selectedObject?.type == 'mental'          ) return `Поведенчески разстройства`;
        if(this.selectedObject?.type == 'endocrine'       ) return `Болести на ендокринната система`;
        if(this.selectedObject?.type == 'circulatory'     ) return `Болести на кръвообращението`;
        if(this.selectedObject?.type == 'respiratory'     ) return `Болести на дихателната система`;
        if(this.selectedObject?.type == 'digestive'       ) return `Болести на храносмилателната система`;
        if(this.selectedObject?.type == 'skin'            ) return `Болести на кожата`;
        if(this.selectedObject?.type == 'muskuloskeletal' ) return `Болести на костно-мускулната система`;
        if(this.selectedObject?.type == 'genitourinary'   ) return `Болести на пикочо-половата система`;
        if(this.selectedObject?.type == 'pregnancy'       ) return `Бременност и раждане`;
        if(this.selectedObject?.type == 'congenital'      ) return `Вродени аномалии`;
        if(this.selectedObject?.type == 'injuries'        ) return `Травми и отравяния`;
        return '';
      }


  public diseaseName!: string;
  public relatedPatients: any[] = [];

  // Open the PATIENT record in the DISEASE INFO modal
  public async openPatientInfo(pet_id: number) {
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
