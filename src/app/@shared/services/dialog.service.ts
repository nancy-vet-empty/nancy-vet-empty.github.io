import { Injectable, inject } from "@angular/core";
import { ModalController } from "@ionic/angular";

type ModalDialogArgumentObject = {
  selectedObject: any
}


class DialogOperation {

  private modelReference: HTMLIonModalElement;

  public constructor(modelReference: HTMLIonModalElement) {
    this.modelReference = modelReference;
  }

  /**
   * General processor command for executing unspecified modal dialog services
   * @param roleCommand
   * @param callback
   */
  public async whenProcessed(roleCommand: string, callback: any) {

    const { data, role } = await this.modelReference.onWillDismiss();

    if(role == roleCommand) {
      callback(data);
    }
  }

  public async whenConfirmed(callback: any) {

    const { data, role } = await this.modelReference.onWillDismiss();

    if(role == 'confirm') {
      callback(data);
    }
  }
}


@Injectable({
  providedIn: "root"
})
export class DialogService {

  private modalController: ModalController = inject(ModalController);

  /**
   * Open dialog based on specific controller
   * @param component
   */
  public async open(componentReference: any, argumentData?: ModalDialogArgumentObject): Promise<DialogOperation> {

    const modalReference = await this.modalController.create({
      component     : componentReference,
      componentProps: argumentData
    });

    modalReference.present();

    return new DialogOperation(modalReference);
  }
}
