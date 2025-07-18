import { Component, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";

@Component({
  selector    : 'modal--detail',
  templateUrl : './detail.component.html',
  styleUrl    : './detail.component.scss'
})
export class DetailModal {

  private modalController: ModalController  = inject(ModalController);
  public selectedObject: any;

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }

  public onOpenPdfDocument(url: string) {
    window.open(`${url}`, '_blank')?.focus();
    console.log(`link: ${url}`)
  }
}
