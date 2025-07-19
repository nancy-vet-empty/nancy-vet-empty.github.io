import { Component, inject    } from '@angular/core';

import { TermService          } from 'nv@services/term.service';
import { DialogService        } from 'nv@services/dialog.service';
import { TermDetailModal } from './@modal/term-detail/term-detail.component';
import { SelectCategoryModal } from './@modal/select-category/select-category.component';

@Component({
  selector    : 'page-term',
  templateUrl : 'term.page.html',
  styleUrl    : 'term.page.scss'
})
export class TermPage {

  private $termsDataService = inject(TermService);
  private dialogService     = inject(DialogService);

  public $collection: any           = [];
  public imageCollection: any[]     = this.$termsDataService.getByCategoryType();
  public $selectedCategories: any[] = [];

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async selectCategory($event: any) {

    (await this.dialogService.open(TermDetailModal, {
      selectedObject: $event
    }));
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public onSearchCategoryClicked($event: any) {
    const categoryValue = $event.detail.value;
    this.imageCollection = (categoryValue == 'all')
      ? this.$termsDataService.getByCategoryType()
      : this.$termsDataService.getByCategoryType(categoryValue);
  }

  public onItemSearched(searchValue: string) {
    this.processfilterItemCollection(searchValue);
    console.log("Filtered:", this.imageCollection);
  }

private processfilterItemCollection(filterValue: string) {
  this.imageCollection = this.$termsDataService.$terms()
                                              .filterByTitle(filterValue)
                                              .getByCategoryType();
}



  public translate(label: string) {
    if(label == 'CBC'         ) return "ПКК";
    if(label == 'liver'       ) return "Черен дроб";
    if(label == 'kidneys'     ) return "Бъбреци";
    if(label == 'coagulation' ) return "Коагулация";
    if(label == 'others'      ) return "Други";

    return "";
  }
}
