import { Component, OnInit, inject  } from '@angular/core';
import { DialogService } from 'nv@services/dialog.service';

import { DetailModal } from './@modal/detail/detail.component';
import { BloodSmearService } from 'nv@services/blood-smear.service';

@Component({
  selector    : 'page-probe',
  templateUrl : './probe.page.html',
  styleUrl    : './probe.page.scss'
})
export class ProbePage implements OnInit {

  private $probeService: BloodSmearService   = inject(BloodSmearService);
  private dialogService: DialogService       = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {
    this.$data = this.$probeService.get('blood-smear-collection');
  }

  /**
   * @author Mihail Petrov
   * @param element
   */
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
  // private getServiceBasedOnPath(pathId: string) {

  //   if(pathId == 'tab1') return 'copro';
  //   if(pathId == 'tab2') return 'ear';
  //   if(pathId == 'tab3') return 'skin';
  //   if(pathId == 'tab4') return 'trichogram';
  //   if(pathId == 'tab5') return 'urine';
  //   return '';
  // }
}
