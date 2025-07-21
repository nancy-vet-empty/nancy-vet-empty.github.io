import { Component, OnInit, inject  } from "@angular/core";
import { ModalController            } from "@ionic/angular";
import { DialogService        } from 'nv@services/dialog.service';

import { AbbreviationsChartModal      } from './abbreviations-chart/abbreviations-chart.component';

@Component({
  selector    : 'modal--drug-info',
  templateUrl : './drug-info.component.html',
  styleUrl    : './drug-info.component.scss'
})
export class DrugInfoModal implements OnInit {

  private modalController: ModalController  = inject(ModalController);

  public selectedObject: any;
  public selectedDrugApplicationCollection: any[] = [];
  private dialogService: DialogService  = inject(DialogService);

  public ngOnInit() {
    this.selectedDrugApplicationCollection = this.processApplicationCollection();
  }

  /**
   * @author Mihail Petrov
   */
  public onConfirm() {
    this.modalController.dismiss();
  }

  public onOpenPdfDocument(url: string) {
    window.open(`assets/${url}`, '_blank')?.focus();
  }

   public onOpenLink(url: string) {
    window.open(url, '_blank')?.focus();
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private processApplicationCollection() {

    const application       = this.selectedObject.application;
    const resultCollection  = [];

    if(application['any']) {

      return [
        { typeTitle: 'за КУЧЕТА'  , ...application['any'] },
        { typeTitle: 'за КОТКИ'   , ...application['any'] }
      ];
    }

    if(application['dog']) {
      resultCollection.push({ typeTitle: 'за КУЧЕТА'  , ...application['dog'] });
    }

    if(application['cat']) {
      resultCollection.push({ typeTitle: 'за КОТКИ'   , ...application['cat'] });
    }

    return resultCollection;
  }

  public openInfoModal() {
    this.dialogService.open(AbbreviationsChartModal);
  }

}
