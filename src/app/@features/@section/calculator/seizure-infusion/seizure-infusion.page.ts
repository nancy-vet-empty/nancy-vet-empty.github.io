import { Component, OnInit, inject  } from '@angular/core';
import { DialogService      } from 'nv@services/dialog.service';
import { ResultModal        } from './@modal/result-modal/result-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'page-seizure-infusion',
  templateUrl : 'seizure-infusion.page.html',
  styleUrl    : 'seizure-infusion.page.scss'
})
export class SeizureInfusion {

  private dialogService: DialogService  = inject(DialogService);
  private $router: ActivatedRoute       = inject(ActivatedRoute);

  public $ui = {
    isLiqidDoseProcessable  : true,
    concentrationResultIm   : 0,
    concentrationResultIv   : 0,
    animalDose              : 0,
    animalDoseIm            : 0,
    mlNeeded                : 0,
    mlNeededIm              : 0
  };


  public $formProperty: any = {
    patientWeight             : 0,
    dosage                    : 0,
    injectionRoute            : 'IV',
    ceftriaxoneConcentration  : '1'
  }


  public processSelectInjectionRoute($injectionRoute: any): void {
    this.$formProperty.injectionRoute = $injectionRoute;
  }

  public processСelectCeftriaxoneConcentration($ceftriaxoneConcentration: any): void {
    this.$formProperty.ceftriaxoneConcentration = $ceftriaxoneConcentration;
  }

  public processCalculationCeftriaxoneConcentration() {

    // Дозировка на цефтриаксон ИВ
    this.$ui.concentrationResultIv = parseFloat(this.$formProperty.ceftriaxoneConcentration) / 5 * 1000

    this.$ui.animalDose = parseFloat(this.$formProperty.dosage) * parseFloat(this.$formProperty.patientWeight)

    this.$ui.mlNeeded = (this.$ui.animalDose / (this.$ui.concentrationResultIv))

    // Дозировка на цефтриаксон ИМ
    this.$ui.concentrationResultIm = parseFloat(this.$formProperty.ceftriaxoneConcentration) / 4 * 1000

    this.$ui.animalDoseIm = parseFloat(this.$formProperty.dosage) * parseFloat(this.$formProperty.patientWeight)

    this.$ui.mlNeededIm = (this.$ui.animalDoseIm / (this.$ui.concentrationResultIm))

  }

  public selectInjectionRoute($event: any) {
    this.$formProperty.injectionRoute = ($event.detail.checked) ? 'IM' : 'IV';
  }

  // ЦЕФТРИАКСОН ПРАХ - КОНЦЕНТРАЦИЯ
  public selectCeftriaxoneConcentration($event: any) {
    this.$formProperty.ceftriaxoneConcentration = ($event.detail.checked) ? '2' : '1';
  }

  public clearAllValues() {

    this.$formProperty = {
      patientWeight           : 0,
      dosage                  : 0,
      injectionRoute          : 'IV',
      ceftriaxoneConcentration: '1'
    }
  }
}
