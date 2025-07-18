import { Component, OnInit, inject } from '@angular/core';

import { DataService          } from 'nv@services/data.service';
import { DialogService        } from 'nv@services/dialog.service';

import { SelectCategoryModal  } from './@modal/select-category/select-category.component';
import { DrugInfoModal        } from './@modal/drug-info/drug-info.component';

@Component({
  selector    : 'page-collection',
  templateUrl : './medications.page.html',
  styleUrl    : './medications.page.scss'
})
export class MedicationsPage implements OnInit {

  private $dataService: DataService     = inject(DataService);
  private dialogService: DialogService  = inject(DialogService);

  public $collection: any           = [];
  private $selectedCategories: any  = [];
  private activeFilter: string      = 'title';

  public ngOnInit(): void {
        this.$collection = this.$dataService.$medicine().getAll();
  }

  /**
   *
   * @param searchItem
   */
  public onItemSearched(searchValue: string) {
    this.processfilterItemCollection(searchValue);
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onSelectCard($event: any) {

    (await this.dialogService.open(DrugInfoModal, {
      selectedObject: $event
    }));
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onFilter($event: any) {

    (await this.dialogService.open(SelectCategoryModal)).whenConfirmed((collection: any) => {

      this.$selectedCategories = collection.selectedCategory;
      this.activeFilter        = collection.searchCriteria
      this.processGetItemCollection();
    });
  }

  /**
   * @author Mihail Petrov
   */
  private processGetItemCollection() {

this.$collection = this.$dataService.$medicine()
                      .filterByCategory(this.$selectedCategories)
                      .get();
  }

  /**
   * @author Mihail Petrov
   * @param filterValue
   */
  private processfilterItemCollection(filterValue: string) {

    this.$collection = this.$dataService.$medicine()
                      .filterByCategory(this.$selectedCategories)
                      .filterByTitle(filterValue)
                      // .filterByPrimary(this.activeFilter, filterValue)
                      .get();
  }
}
