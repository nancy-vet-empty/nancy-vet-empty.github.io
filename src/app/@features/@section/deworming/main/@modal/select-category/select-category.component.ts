import { Component, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";

@Component({
  selector    : 'modal--select-category',
  templateUrl : './select-category.component.html',
  styleUrl    : './select-category.component.scss'
})
export class SelectCategoryModal {

  private modalController: ModalController  = inject(ModalController);
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
      selectedCategory: this.$selectedCategories
    }, 'confirm');
  }


  /**
   * @author Mihail Petrov
   * @param $categoryCollection
   */
  public processOnCategorySelect($categoryCollection: any) {
    this.$selectedCategories = $categoryCollection;
  }

  public onReset() {
    // empty
  }
}
