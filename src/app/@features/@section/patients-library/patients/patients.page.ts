import { Component, OnInit, inject } from '@angular/core';

import { PatientDataService        } from 'nv@services/patients-data.service';
import { DialogService             } from 'nv@services/dialog.service';

import { SelectCategoryModal       } from './@modal/select-category/select-category.component';
import { PatientRecordModal        } from './@modal/patient-record/patient-record.component';
import { ModalController           } from '@ionic/angular';
import { CreatePatientComponent    } from './@modal/create-patient/create-patient.component'; // ✅ Adjust if needed


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
  public searchQuery: string = '';
  public filterWardOnly: boolean = false;
  public allPatients: any[] = [];
  public filteredPatients: any[] = [];

  public ngOnInit(): void {
    this.$collection = this.$dataService.$patient().getAll();
    // console.log("Loaded patients:", this.$collection);
    this.allPatients = this.$collection;
    this.filteredPatients = this.$collection;
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

  public onItemSearched(value: string) {
    this.searchQuery = value.toLowerCase();  // Store and lowercase it
    this.applyFilters();                     // Re-apply filters
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

  applyFilters() {
    this.filteredPatients = this.allPatients.filter(patient => {
      const matchesName = this.searchCategory === 'petName'
        ? patient.pet_name?.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesDiagnosis = this.searchCategory === 'diagnosis'
        ? (patient.pets_diseases || []).some((d: string) =>
          d.toLowerCase().includes(this.searchQuery.toLowerCase()))
        : true;

      const matchesOwner = this.searchCategory === 'ownerName'
        ? patient.owner_name?.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesAddress = this.searchCategory === 'ownerAddress'
        ? patient.address?.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesAnimalType = this.selectedAnimalType
        ? patient.animalType?.toLowerCase() === this.selectedAnimalType
        : true;

      const matchesWard = this.filterWardOnly
        ? Number(patient.ward) > 0
        : true;

      return (
        matchesName &&
        matchesDiagnosis &&
        matchesOwner &&
        matchesAddress &&
        matchesAnimalType &&
        matchesWard
      );
    });
  }

  toggleWardFilter() {
    this.filterWardOnly = !this.filterWardOnly;
    this.applyFilters(); // Apply the filters again
  }

  constructor(private modalController: ModalController) {}

  async openCreatePatientModal() {
    const modal = await this.modalController.create({
      component: CreatePatientComponent
    });
    await modal.present();
  }

}
