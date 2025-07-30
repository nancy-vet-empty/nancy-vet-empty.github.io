import { Component, OnInit, inject } from '@angular/core';

import { PatientDataService        } from 'nv@services/patients-data.service';
import { DialogService             } from 'nv@services/dialog.service';

import { SelectCategoryModal       } from '../@modal/select-category/select-category.component';
import { PatientRecordModal        } from '../@modal/patient-record/patient-record.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector    : 'page-collection',
  templateUrl : './ward.page.html',
  styleUrl    : './ward.page.scss'
})
export class WardPage implements OnInit {

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
    this.allPatients = this.$collection;
    this.applyFilters(); // Show only ward patients immediately
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
    this.filteredPatients = this.allPatients
      .filter(patient => Number(patient.ward) > 0)
      .sort((a, b) => Number(a.ward) - Number(b.ward));
  }


  toggleWardFilter() {
    this.filterWardOnly = !this.filterWardOnly;
    this.applyFilters(); // Apply the filters again
  }

  constructor(private modalController: ModalController) {}

}
