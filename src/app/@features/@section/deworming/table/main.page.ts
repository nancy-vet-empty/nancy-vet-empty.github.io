import { Component, OnInit, inject  } from '@angular/core';

import { DewormingService           } from 'nv@services/deworming.service';
import { DialogService              } from 'nv@services/dialog.service';


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

  public renderImage(tag: string) {
    return tag.replace("@", "");
  }
}
