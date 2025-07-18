import { Component, OnInit, inject  } from "@angular/core";
import { ModalController            } from "@ionic/angular";
import { DialogService      } from "nv@services/dialog.service";
import { GalleryModal       } from "../gallery/gallery.component";

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrl    : './drug-info.component.scss'
})
export class DrugInfoModal {

  private modalController: ModalController  = inject(ModalController);
  private dialogService: DialogService      = inject(DialogService);

  public selectedObject: any;
  public selectedObjectApplicationCollection: any[] = [];

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }

  /**
   * @author Mihail Petrov
   * @param url
   */
  public onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }

  public renderVideo(tag: string) {
    return tag.replace("$", "");
  }

  public renderImage(tag: string) {
    return tag.replace("@", "");
  }

      /**
   * @author Mihail Petrov
   */
      public async onGalleryOpen() {

        (await this.dialogService.open(GalleryModal, {
          selectedObject: this.selectedObject.gallery
        }));
      }

      public getTitle() {

        if(this.selectedObject?.type == 'infectious'      ) return `Инфекциозни заболявания`;
        if(this.selectedObject?.type == 'parasitic'       ) return `Паразитни заболявания`;
        if(this.selectedObject?.type == 'neoplasms'       ) return `Новообразувания`;
        if(this.selectedObject?.type == 'blood'           ) return `Болести на кръвта и имунната система`;
        if(this.selectedObject?.type == 'nervous'         ) return `Болести на нервната система`;
        if(this.selectedObject?.type == 'eye'             ) return `Болести на окото`;
        if(this.selectedObject?.type == 'ear'             ) return `Болести на ухото`;
        if(this.selectedObject?.type == 'mental'          ) return `Поведенчески разстройства`;
        if(this.selectedObject?.type == 'endocrine'       ) return `Болести на ендокринната система`;
        if(this.selectedObject?.type == 'circulatory'     ) return `Болести на кръвообращението`;
        if(this.selectedObject?.type == 'respiratory'     ) return `Болести на дихателната система`;
        if(this.selectedObject?.type == 'digestive'       ) return `Болести на храносмилателната система`;
        if(this.selectedObject?.type == 'skin'            ) return `Болести на кожата`;
        if(this.selectedObject?.type == 'muskuloskeletal' ) return `Болести на костно-мускулната система`;
        if(this.selectedObject?.type == 'genitourinary'   ) return `Болести на пикочо-половата система`;
        if(this.selectedObject?.type == 'pregnancy'       ) return `Бременност и раждане`;
        if(this.selectedObject?.type == 'congenital'      ) return `Вродени аномалии`;
        if(this.selectedObject?.type == 'injuries'        ) return `Травми и отравяния`;
        return '';
      }
}
