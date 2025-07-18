import { Component, OnInit, inject  } from '@angular/core';
import { DialogService      } from 'nv@services/dialog.service';
import { ResultModal        } from './@modal/result-modal/result-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'page-infusion-pain',
  templateUrl : 'infusion-pain.page.html',
  styleUrl    : 'infusion-pain.page.scss'
})
export class InfusionPainPage implements OnInit {

  private dialogService: DialogService  = inject(DialogService);
  private $router: ActivatedRoute       = inject(ActivatedRoute);

  public $ui = {
    isLiqidDoseProcessable  : true,
    formulaResult           : 0
  };

  public ngOnInit() {

    const data                    = this.$router.snapshot.params;
    this.$formProperty.modalType  = data['id'];

    if(data['id'] == 'rodentizidi' ) {
      this.$ui.isLiqidDoseProcessable = false
    }

    if(data['id'] == 'parazetamol' ) {
      this.$ui.isLiqidDoseProcessable = false
    }

    if(data['id'] == 'pestizidi' ) {
      this.$ui.isLiqidDoseProcessable = false
    }

    if(data['id'] == 'promivka' ) {
      this.$ui.isLiqidDoseProcessable = false
    }
  }


  public $formProperty: any = {
    patientWeight : '',
    patientType   : 'dog',

    c1            : null,
    c2            : 5,
    v2            : 100
  }

  public volumeOption = [
    { key: '5%'   , value: 5    },
    { key: '20%'  , value: 20   },
    { key: '7%'   , value: 7    },
    { key: '30%'  , value: 30   },
  ];

  public volumeOption2 = [
    { key: '5%'   , value: 5    },
    { key: '20%'  , value: 20   },
  ];

  public bankOption = [
    { key: '100'    , value: 100  },
    { key: '250'    , value: 250 },
    { key: '500'    , value: 500 },
    { key: '1000'   , value: 1000 },
  ];

  public onSelectVolumeOption($value: any) {
    this.$formProperty.c2 = $value;
  }

  public onSelectBankOption($value: any) {
    this.$formProperty.v2 = $value;
  }

  public processSelectPatientType($patientType: any): void {
    this.$formProperty.patientType = $patientType;
  }

  public processCalculationFirstPainInfusion() {

    this.$ui.formulaResult = ((
      parseFloat(this.$formProperty.patientWeight) * (this.$formProperty.dose)
    ) / this.$formProperty.speed) * 50

    // this.dialogService.open(ResultModal, {
    //   selectedObject: this.$formProperty
    // });
  }

  public processCalculationSecondPainInfusion() {

    this.$ui.formulaResult = parseFloat(this.$formProperty.patientWeight) * 5
  }

  public isProcessable() {

    return  this.$formProperty.c2 != null &&
            this.$formProperty.c1 != null &&
            this.$formProperty.v2 != null &&
            this.$formProperty.patientWeight != null;
  }

  public selectAnimalType($event: any) {
    this.$formProperty.patientType = ($event.detail.checked) ? 'cat' : 'dog';

    console.log(this.$formProperty.patientType)
  }

  public clearAllValues() {

    this.$formProperty = {
      patientWeight : null,
      patientType   : 'dog',
      c1            : null,
      c2            : 5,
      v2            : 100
    }
  }
}
