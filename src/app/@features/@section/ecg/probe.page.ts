import { Component, OnInit, inject  } from '@angular/core';
import { DialogService              } from 'nv@services/dialog.service';

import { DetailModal                } from './@modal/detail/detail.component';
import { EcgService                 } from 'nv@services/ecg.service';

@Component({
  selector    : 'page-probe',
  templateUrl : './probe.page.html',
  styleUrl    : './probe.page.scss'
})
export class ProbePage implements OnInit {

  private $probeService: EcgService     	  = inject(EcgService);
  private dialogService: DialogService      = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {
    this.$data = this.$probeService.get('ecg');
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


  public onOpenPdfDocument(url: string) {
    window.open(`${url}`, '_blank')?.focus();
    console.log(`link: ${url}`)
  }
}
