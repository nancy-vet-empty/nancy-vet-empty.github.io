import { Component, Input, inject     } from "@angular/core";
import { IonicModule, ModalController } from "@ionic/angular";

@Component({
  selector    : 'nv-info-modal',
  templateUrl : './nv-info-modal.component.html',
  styleUrl    : './nv-info-modal.component.scss',
  standalone  : true,
  imports     : [
    IonicModule
  ]
})
export class NvInfoModal {

  @Input()
  public inputTitle: string = '';

  protected modalController: ModalController  = inject(ModalController);

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }
}
