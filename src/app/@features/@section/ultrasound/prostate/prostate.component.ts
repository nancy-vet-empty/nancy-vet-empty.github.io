import { Component, inject  } from '@angular/core';
import { DialogService      } from 'nv@services/dialog.service';
import { ResultModal        } from './@modal/result-modal/result-modal.component';

@Component({
  selector    : 'app-prostate',
  templateUrl : './prostate.component.html',
  styleUrls   : ['./prostate.component.scss']
})
export class ProstateComponent {

  private dialogService     = inject(DialogService);

  public age: number = 0;
  public weight: number = 0;

  public $ui = {
    L     : 0,
    W     : 0,
    Hsag  : 0,
    Htr   : 0,
    V     : 0
  }

  public async processCalculation() {

    this.$ui.L    = Math.round(((0.055 * this.weight) + (0.143 * this.age) + 3.31   ) * 100) / 100;
    this.$ui.W    = Math.round(((0.047 * this.weight) + (0.089 * this.age) + 3.45   ) * 100) / 100;
    this.$ui.Hsag = Math.round(((0.046 * this.weight) + (0.069 * this.age) + 2.68   ) * 100) / 100;
    this.$ui.Htr  = Math.round(((0.044 * this.weight) + (0.083 * this.age) + 2.25   ) * 100) / 100;
    this.$ui.V    = Math.round(((0.867 * this.weight) + (1.885 * this.age) + 15.88  ) * 100) / 100;

    (await this.dialogService.open(ResultModal, {
      selectedObject: this.$ui
    }));
  }
}
