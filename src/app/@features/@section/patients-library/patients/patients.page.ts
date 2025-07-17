import { Component, OnInit, inject } from '@angular/core';

import { PatientDataService        } from 'nv@services/patients-data.service';
import { DialogService             } from 'nv@services/dialog.service';

import { SelectCategoryModal       } from './@modal/select-category/select-category.component';
import { PatientRecordModal        } from './@modal/patient-record/patient-record.component';


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

    if(this.searchCategory == "ownerName") {
      this.$collection = this.$dataService.$patient().filterByOwnerName($event).getAll();
    }
    if(this.searchCategory == "diagnosis") {
      this.$collection = this.$dataService.$patient().filterByDiagnosis($event).getAll();
    }

  }


  public onFilter($event: any) {
    console.log($event)
  }

  public onSearchCategorySelected(searchCategory: string) {
    this.searchCategory = searchCategory;
  }
}
