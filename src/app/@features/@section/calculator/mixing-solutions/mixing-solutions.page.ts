import { Component, OnInit, inject  } from '@angular/core';
import { DialogService      } from 'nv@services/dialog.service';
import { ResultModal        } from './@modal/result-modal/result-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'page-mixing-solutions',
  templateUrl : 'mixing-solutions.page.html',
  styleUrl    : 'mixing-solutions.page.scss'
})
export class MixingSolutions {

  private dialogService: DialogService  = inject(DialogService);
  private $router: ActivatedRoute       = inject(ActivatedRoute);

  public $ui = {
    mustAddFirst            : 0,
    mustAddSecond           : 0
  };


  public $formProperty: any = {
    solutionConcentrationFirst   : 0,
    solutionConcentrationSecond  : 0,
    solutionConcentrationWanted  : 0
  }


  public processCalculationMixingSolutions() {

    // Намираш колко МЛ са нужни от р-р ПЪРВИ
    if( (this.$formProperty.solutionConcentrationSecond - this.$formProperty.solutionConcentrationWanted) > 0)
      {
        this.$ui.mustAddFirst = (this.$formProperty.solutionConcentrationSecond - this.$formProperty.solutionConcentrationWanted)
      }
     else(
      this.$ui.mustAddFirst = (this.$formProperty.solutionConcentrationWanted - this.$formProperty.solutionConcentrationSecond)
     )

    console.log(this.$formProperty.solutionConcentrationWanted - this.$formProperty.solutionConcentrationSecond)


    // Намираш колко МЛ са нужни от р-р ВТОРИ
     if( (this.$formProperty.solutionConcentrationFirst - this.$formProperty.solutionConcentrationWanted) > 0)
      {
        this.$ui.mustAddSecond = (this.$formProperty.solutionConcentrationFirst - this.$formProperty.solutionConcentrationWanted)
      }
     else(
      this.$ui.mustAddSecond = ((this.$formProperty.solutionConcentrationWanted - this.$formProperty.solutionConcentrationFirst))
     )
  }


  public clearAllValues() {

    this.$formProperty = {
      solutionConcentrationFirst   : 0,
      solutionConcentrationSecond  : 0,
      solutionConcentrationWanted  : 0
    }
  }
}
