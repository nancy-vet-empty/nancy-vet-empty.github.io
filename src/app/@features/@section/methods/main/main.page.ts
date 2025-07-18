import { Component, OnInit, inject  } from '@angular/core';
import { MethodService } from 'nv@services/methods.service';
import { DrugInfoModal } from '../@modal/drug-info/drug-info.component';
import { DialogService } from 'nv@services/dialog.service';
import { SelectCategoryModal } from '../@modal/select-category/select-category.component';


@Component({
  selector    : 'page-trivia',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: MethodService   = inject(MethodService);
  private dialogService: DialogService  = inject(DialogService);
  public $data: any;

  private $selectedCategories: any  = [];

  public ngOnInit(): void {
    this.$data = this.$dataService.$methods().get();
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */

  public onItemSearched(searchValue: string) {
    this.processfilterItemCollection(searchValue);
  }

  public async onSelectCard($event: any) {

    (await this.dialogService.open(DrugInfoModal, {
      selectedObject: $event
    }));
  }

  public findImageMethod(type: any): any {
    const imagePath = `/assets/icon/methods/${type}.png`;
    // const breed = DogBreedsJson.find((b) => b.code === code);
    // const nameBreed = breed ? breed.nameEn : 'Unknown Breed';
    // console.log(`Breed: ${nameBreed}, Generated image path: ${imagePath}`);
    return imagePath;
  }

  public async onFilter($event: any) {

    (await this.dialogService.open(SelectCategoryModal)).whenConfirmed((collection: any) => {

      this.$selectedCategories = collection.selectedCategory;
      this.processGetItemCollection();
    });
  }

    private processGetItemCollection() {
    this.$data = this.$dataService.$methods()
      .filterByCategory(this.$selectedCategories)
      .get();
  }

  private processfilterItemCollection(filterValue: string) {

    this.$data = this.$dataService.$methods()
                                        .filterByCategory(this.$selectedCategories)
                                        .filterByTitle(filterValue)
                                        .get();
  }
}
