import { Component, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";

@Component({
  selector    : 'modal--gallery',
  templateUrl : './gallery.component.html',
  styleUrl    : './gallery.component.scss'
})
export class GalleryModal {

  private modalController: ModalController  = inject(ModalController);
  public selectedObject: any;

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }
}
