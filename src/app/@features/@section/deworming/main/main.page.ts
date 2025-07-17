import { Component, OnInit, inject  } from '@angular/core';

import { DewormingService           } from 'nv@services/deworming.service';
import { DialogService              } from 'nv@services/dialog.service';

import { InfoModal                  } from './@modal/info/info.component';
import { SelectCategoryModal        } from './@modal/select-category/select-category.component';

@Component({
  selector    : 'page-deworming',
  templateUrl : './main.page.html',
  styleUrl    : 'main.page.scss',
})
export class MainComponent implements OnInit {

  private $dataService: DewormingService  = inject(DewormingService);
  private dialogService: DialogService    = inject(DialogService);

  public $collection: any           = [];
  private $selectedCategories: any  = [];

  public ngOnInit(): void {
    this.$collection = this.$dataService.$symptoms().getAll();
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

    (await this.dialogService.open(InfoModal, {
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

  public onOpenPdfDocument(url: string) {
    window.open(`${url}`, '_blank')?.focus();
    console.log(`link: ${url}`)
  }
}
