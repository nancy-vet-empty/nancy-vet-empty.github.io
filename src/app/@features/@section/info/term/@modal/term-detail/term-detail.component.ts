import { Component, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";

@Component({
  selector    : 'modal--term-detail',
  templateUrl : './term-detail.component.html',
  styleUrl    : './term-detail.component.scss'
})
export class TermDetailModal {

  private modalController: ModalController  = inject(ModalController);
  public selectedObject: any;

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }


}
