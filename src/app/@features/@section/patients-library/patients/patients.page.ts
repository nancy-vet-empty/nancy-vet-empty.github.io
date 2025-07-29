import { Component, OnInit, inject } from '@angular/core';

import { PatientDataService        } from 'nv@services/patients-data.service';
import { DialogService             } from 'nv@services/dialog.service';

import { SelectCategoryModal       } from './@modal/select-category/select-category.component';
import { PatientRecordModal        } from './@modal/patient-record/patient-record.component';
import { ModalController } from '@ionic/angular';
import { CreatePatientComponent } from './@modal/create-patient/create-patient.component'; // ✅ Adjust if needed


@Component({
  selector    : 'page-collection',
  templateUrl : './patients.page.html',
  styleUrl    : './patients.page.scss'
})
export class PatientsPage implements OnInit {

  private $dataService: PatientDataService  = inject(PatientDataService);
  private dialogService: DialogService      = inject(DialogService);

  public $collection: any = [];
  public searchCategory = "ownerName";
  public selectedAnimalType: 'dog' | 'cat' | "rabbit" | "guineapig" | null = null;

  public ngOnInit(): void {
    this.$collection = this.$dataService.$patient().getAll();
    // console.log("Loaded patients:", this.$collection);
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onSelectCard($event: any) {

    (await this.dialogService.open(PatientRecordModal, {
      selectedObject: $event
    }));
  }


  // private processGetItemCollection() {

  //   this.$collection = this.$dataService.$patient()
  //                     // .filterByCategory(this.$selectedCategories)
  //                     .getAll();
  // }

public onItemSearched($event: any) {
  let service = this.$dataService.$patient();

  if (this.selectedAnimalType) {
    service = service.filterByAnimalType(this.selectedAnimalType);
  }

  if (this.searchCategory == "ownerName") {
    service = service.filterByOwnerName($event);
  }
  if (this.searchCategory == "diagnosis") {
    service = service.filterByDiagnosis($event);
  }
  if (this.searchCategory == "petName") {
    service = service.filterByPetName($event);
  }
  if (this.searchCategory == "ownerAddress") {
  service = service.filterByOwnerAddress($event); // spelling should match your method
}


  this.$collection = service.getAll();
}



  public onFilter($event: any) {
    console.log($event)
  }

  public onSearchCategorySelected(category: string) {
    // Handle animalType selection separately
    if (category === 'dog' || category === 'cat' || category === 'rabbit' || category === 'guineapig') {
      // Toggle selection (same button clicked again)
      this.selectedAnimalType = this.selectedAnimalType === category ? null : category;
      this.applyFilters();
      return;
    }

    this.searchCategory = category;
  }

public applyFilters() {
  let service = this.$dataService.$patient();

  if (this.selectedAnimalType) {
    service = service.filterByAnimalType(this.selectedAnimalType);
  }

  // This will handle search input from the toolbar (e.g., by owner, name, etc.)
  this.$collection = service.getAll();
}





  constructor(private modalController: ModalController) {}

  async openCreatePatientModal() {
    const modal = await this.modalController.create({
      component: CreatePatientComponent
    });
    await modal.present();
  }

}
