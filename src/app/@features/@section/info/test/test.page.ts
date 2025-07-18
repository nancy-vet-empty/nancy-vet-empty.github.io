import { Component, inject    } from '@angular/core';

import { TestService          } from 'nv@services/test.service';
import { DialogService        } from 'nv@services/dialog.service';

import { SelectCategoryModal  } from './@modal/select-category/select-category.component';
import { DetailModal          } from './@modal/detail/detail.component';

@Component({
  selector    : 'page-test',
  templateUrl : 'test.page.html',
  styleUrl    : 'test.page.scss'
})
export class TestPage {

  private $dataService  = inject(TestService);
  private dialogService = inject(DialogService);

  public imageCollection: any[]     = this.$dataService.getByCategoryType();
  public $selectedCategories: any[] = [];

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async selectCategory($event: any) {

    (await this.dialogService.open(DetailModal, {
      selectedObject: $event
    }));
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public onSerachCategoryClicked($event: any) {

    const categoryValue = $event.detail.value;
    this.imageCollection = (categoryValue == 'all')
      ? this.$dataService.getByCategoryType()
      : this.$dataService.getByCategoryType(categoryValue);
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public onItemSearched($event: any) {

  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onFilter($event: any) {

    (await this.dialogService.open(SelectCategoryModal)).whenConfirmed((collection: any) => {

      // this.$selectedCategories = collection.selectedCategory;
      // this.activeFilter        = collection.searchCriteria
      // this.processGetItemCollection();
    });
  }

  /**
   * @author Mihail Petrov
   * @param label
   * @returns
   */
  public translate(label: string) {

    if(label == 'cat'         ) return "ЗА КОТКИ";
    if(label == 'dog'         ) return "ЗА КУЧЕТА";
    if(label == 'both'        ) return "УНИВЕРСАЛЕН";
    return "";
  }
}
