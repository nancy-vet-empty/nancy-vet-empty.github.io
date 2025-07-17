import { CommonModule } from "@angular/common";
import { Component, inject  } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule, ModalController    } from "@ionic/angular";
import { CategoryPickerComponent } from "nv@components/@blocks/category-picker/category-picker.component";
import { DrugCard } from "nv@components/@blocks/drug-card/drug-card.component";
import { NvLinkButtonComponent } from "nv@components/@forms/nv-link-button/nv-link-button.component";
import { NvRadioComponent } from "nv@components/@forms/nv-radio/nv-radio.component";
import { NvInfoModal } from "nv@components/@layouts/nv-info-modal/nv-info-modal.component";
import { NvSearchToolbarComponent } from "nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component";
import { PrimaryMenu } from "nv@features/@menu/primary-menu/primary-menu.component";
import { DosePipe } from "nv@pipes/doce.pipe";
import { SplitPipe } from "nv@pipes/split.pipe";

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrl    : './drug-info.component.scss',
  standalone  : true,
  imports     : [
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    DosePipe                      ,
    SplitPipe                     ,
    PrimaryMenu                   ,
    NvRadioComponent              ,
    DrugCard                      ,
    NvSearchToolbarComponent      ,
    CategoryPickerComponent       ,
    NvInfoModal                   ,
    NvLinkButtonComponent
  ]
})
export class DrugInfoModal {

  private modalController: ModalController  = inject(ModalController);

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
}
