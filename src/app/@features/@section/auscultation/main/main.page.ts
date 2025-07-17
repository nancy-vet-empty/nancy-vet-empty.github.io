import { Component, OnInit, inject  } from '@angular/core';
import { DialogService } from 'nv@services/dialog.service';
import { TriviaService } from 'nv@services/trivia.service';
import { AuscultationService } from 'nv@services/auscultation.service';
import { DetailModal } from './@modal/detail/detail.component';

@Component({
  selector    : 'page-auscultation',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: AuscultationService   = inject(AuscultationService);
  private dialogService: DialogService  = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    this.$data           = this.$dataService.get(serviceId);
  }

  public async onSelectCard(element: any) {

    (await this.dialogService.open(DetailModal, {
      selectedObject: element
    }))
  }

  /**
   * @author Mihail Petrov
   * @param pathId
   * @returns
   */
  private getServiceBasedOnPath(pathId: string) {

    if(pathId == 'tab1') return 'copro';
    if(pathId == 'tab2') return 'ear';
    if(pathId == 'tab3') return 'skin';
    if(pathId == 'tab4') return 'trichogram';
    if(pathId == 'tab5') return 'urine';
    return '';
  }
}
