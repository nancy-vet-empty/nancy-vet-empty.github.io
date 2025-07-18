import { Component, OnInit, inject  } from '@angular/core';

import { SymptomsService            } from 'nv@services/symptoms.service';
import { DialogService              } from 'nv@services/dialog.service';

import { DrugInfoModal              } from './@modal/drug-info/drug-info.component';
import { SelectCategoryModal        } from './@modal/select-category/select-category.component';

@Component({
  selector    : 'page-symptoms',
  templateUrl : './symptoms.page.html',
  styleUrl    : 'symptoms.page.scss'
})
export class SymptomTab implements OnInit {

  private $dataService: SymptomsService = inject(SymptomsService);
  private dialogService: DialogService  = inject(DialogService);

  public $collection: any           = [];
  private $selectedCategories: any  = [];

  public ngOnInit(): void {
    this.$collection = this.$dataService.$symptoms().getAll();
    this.$collection = this.$collection.filter((el: any) => {
      return el.isVisible == true;
    });
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
      this.processGetItemCollection();
    });
  }

  /**
   * @author Mihail Petrov
   */
  private processGetItemCollection() {

    this.$collection = this.$dataService.$symptoms()
                        .filterByCategory(this.$selectedCategories)
                        .get();
  }

  /**
   * @author Mihail Petrov
   * @param filterValue
   */
  private processfilterItemCollection(filterValue: string) {

    this.$collection = this.$dataService.$symptoms()
                                        .filterByCategory(this.$selectedCategories)
                                        .filterByTitle(filterValue)
                                        .get();
  }
}
