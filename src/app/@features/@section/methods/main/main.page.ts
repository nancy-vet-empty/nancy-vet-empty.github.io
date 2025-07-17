import { Component, OnInit, inject  } from '@angular/core';
import { MethodService } from 'nv@services/methods.service';
import { DrugInfoModal } from '../@modal/drug-info/drug-info.component';
import { DialogService } from 'nv@services/dialog.service';

@Component({
  selector    : 'page-trivia',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: MethodService   = inject(MethodService);
  private dialogService: DialogService  = inject(DialogService);
  public $data: any;

  public ngOnInit(): void {
    this.$data = this.$dataService.get();
  }

  /**
   * @author Mihail Petrov
   * @param $event
   */
  public async onSelectCard($event: any) {

    (await this.dialogService.open(DrugInfoModal, {
      selectedObject: $event
    }));
  }
}
