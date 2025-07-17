import { Component, inject  } from "@angular/core";
import { ModalController    } from "@ionic/angular";
import { DialogService      } from "nv@services/dialog.service";
import { GalleryModal       } from "../gallery/gallery.component";

@Component({
  selector    : 'modal--detail',
  templateUrl : './detail.component.html',
  styleUrl    : './detail.component.scss'
})
export class DetailModal {

  private modalController: ModalController  = inject(ModalController);
  private dialogService: DialogService      = inject(DialogService);
  public selectedObject: any;

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }

  /**
   * @author Mihail Petrov
   */
  public async onGalleryOpen() {

    (await this.dialogService.open(GalleryModal, {
      selectedObject: this.selectedObject.gallery
    }));
  }
}
