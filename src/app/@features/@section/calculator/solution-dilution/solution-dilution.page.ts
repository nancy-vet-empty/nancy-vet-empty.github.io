import { Component, OnInit, inject  } from '@angular/core';
import { DialogService      } from 'nv@services/dialog.service';
import { ResultModal        } from './@modal/result-modal/result-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'page-solution-dilution',
  templateUrl : 'solution-dilution.page.html',
  styleUrl    : 'solution-dilution.page.scss'
})
export class SolutionDilution {

  private dialogService: DialogService  = inject(DialogService);
  private $router: ActivatedRoute       = inject(ActivatedRoute);

  public $ui = {
    isLiqidDoseProcessable  : true,
    concentrationResultIm   : 0,
    waterNeeded             : 0,
    c1c2                    : 0
  };


  public $formProperty: any = {
    solutionVolume                  : 0,
    solutionConcentrationAvailable  : 0,
    solutionConcentrationWanted     : 0
  }


  public processCalculationWaterNeeded() {

    // Разделяне на C1 и C2 (концентрациите на наличния и желания р-ри)
    this.$ui.c1c2 = parseFloat(this.$formProperty.solutionConcentrationAvailable) / parseFloat(this.$formProperty.solutionConcentrationWanted)

    this.$ui.waterNeeded = parseFloat(this.$formProperty.solutionVolume) * ((this.$ui.c1c2) - 1)

    console.log(this.$formProperty.solutionConcentrationAvailable)
    console.log(this.$formProperty.solutionConcentrationWanted)
    console.log(this.$ui.c1c2)
    console.log(this.$ui.waterNeeded)
  }



  public clearAllValues() {

    this.$formProperty = {
      solutionVolume                  : 0,
      solutionConcentrationAvailable  : 0,
      solutionConcentrationWanted     : 0
    }
  }
}
