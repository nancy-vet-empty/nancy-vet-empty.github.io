import { Component, ViewChild, inject   } from "@angular/core";
import { ModalController                } from "@ionic/angular";

@Component({
  selector    : 'modal--select-category3',
  templateUrl : './select-category.component.html',
  styleUrl    : './select-category.component.scss'
})
export class SelectCategoryModal {

  private modalController: ModalController  = inject(ModalController);

  @ViewChild("categoryPicker") selectCategoryComponent: any;

  private $selectedCategories: any  = [];

  /**
   * @author Mihail Petrov
   */
  public onCancel() {
    this.modalController.dismiss();
  }

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {

    this.modalController.dismiss({
      selectedCategory  : this.$selectedCategories
    }, 'confirm');
  }

  /**
   * @author Mihail Petrov
   * @param $categoryCollection
   */
  public processOnCategorySelect($categoryCollection: any) {
    this.$selectedCategories = $categoryCollection;
  }

  /**
   * @author Mihail Petrov
   */
  public onReset() {
    this.selectCategoryComponent.resetAllCategories();
  }
}
