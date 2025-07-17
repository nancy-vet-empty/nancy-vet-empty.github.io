import { Component, OnInit, inject } from '@angular/core';

import { DialogService        } from 'nv@services/dialog.service';

import { SelectCategoryModal  } from './@modal/select-category/select-category.component';
import { DrugInfoModal        } from './@modal/drug-info/drug-info.component';
import { DiseasesService      } from 'nv@services/disease.service';

@Component({
  selector    : 'page-collection',
  templateUrl : './diseases.page.html',
  styleUrl    : './diseases.page.scss'
})
export class DiseasesPage implements OnInit {

  private $dataService: DiseasesService = inject(DiseasesService);
  private dialogService: DialogService  = inject(DialogService);

  public $collection: any             = [];
  private $selectedCategories: any    = [];
  private activeFilter: string        = 'title';
  private animalType: any             = [];

  public ngOnInit(): void {
    this.$collection = this.$dataService.select().get();
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
  /** При Филтриране на заболяванията, четвърта функция. */
  public async onFilter($event: any) {

    (await this.dialogService.open(SelectCategoryModal)).whenConfirmed((collection: any) => {

      this.$selectedCategories = collection.selectedCategory;
      this.activeFilter        = collection.searchCriteria;
      this.animalType          = collection.selectedAnimalType;
      this.processGetItemCollection();
    });
  }

  /**
   * @author Mihail Petrov
   */
  private processGetItemCollection() {

    this.$collection = this.$dataService
                        .select()
                        .filterByCategory(this.$selectedCategories)
                        .filterByAnimalType(this.animalType)
                        .get();
  }

  /**
   * @author Mihail Petrov
   * @param filterValue
   */
  private processfilterItemCollection(filterValue: string) {

    this.$collection = this.$dataService
                        .select()
                        .filterByCategory(this.$selectedCategories)
                        .filterByAnimalType(this.animalType)
                        .filterByPrimary(this.activeFilter, filterValue)
                        .get();
  }
}
