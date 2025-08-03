import { Component, OnInit, inject } from '@angular/core';

import { PatientDataService        } from 'nv@services/patients-data.service';
import { DialogService             } from 'nv@services/dialog.service';

import { SelectCategoryModal       } from '../@modal/select-category/select-category.component';
import { PatientRecordModal        } from '../@modal/patient-record/patient-record.component';
import { AnesthetizedRecordModal        } from '../@modal/anesthetized-record/anesthetized-record.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector    : 'page-collection',
  templateUrl : './anesthetized.page.html',
  styleUrl    : './anesthetized.page.scss'
})
export class AnesthetizedPage implements OnInit {

  private $dataService: PatientDataService  = inject(PatientDataService);
  private dialogService: DialogService      = inject(DialogService);

  public $collection: any = [];
  public searchCategory = "petName";
  public selectedAnimalType: 'dog' | 'cat' | "rabbit" | "guineapig" | null = null;
  public searchQuery: string = '';
  public filterWardOnly: boolean = false;
  public allAnesthetized: any[] = [];
  public filteredPatients: any[] = [];

  public ngOnInit(): void {
    this.$collection = this.$dataService.$anesthetized().getAllAnesthetized();
    this.allAnesthetized = this.$collection;
    this.applyFilters(); // Show only ward patients immediately
  }


  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onSelectCard($event: any) {

    (await this.dialogService.open(AnesthetizedRecordModal, {
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
    this.filteredPatients = this.allAnesthetized.filter(patient => {
      const matchesName = this.searchCategory === 'petName'
        ? patient.anesthetized_name?.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesAnimalType = this.selectedAnimalType
        ? patient.animalType?.toLowerCase() === this.selectedAnimalType
        : true;

      return (
        matchesName &&
        matchesAnimalType
      );
    });
  }

  constructor(private modalController: ModalController) {}

}
