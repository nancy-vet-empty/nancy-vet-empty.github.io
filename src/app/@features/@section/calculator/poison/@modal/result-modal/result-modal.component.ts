import { Component, OnInit } from "@angular/core";

@Component({
  selector    : 'modal--result',
  templateUrl : './result-modal.component.html',
  styleUrl    : './result-modal.component.scss',
})
export class ResultModal implements OnInit {

  public selectedObject: any;

  public $uiPropery = {
    administrationValue             : '',
    description                     : '',

    alternativeAdministrationValue  : '',
    alternativeDescription          : ''
  };

  public ngOnInit() {

    this.selectedObject.v1 = (
      (Math.round(
        (  parseFloat(this.selectedObject.c2) /  parseFloat(this.selectedObject.c1)
          ) * parseFloat(this.selectedObject.v2)
      )*100))/100;

    if(this.selectedObject.patientType   == 'dog') {

      if(this.selectedObject.c2 == '5') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 22}`;
        this.$uiPropery.description             = 'ИВ q4h за 24 ч - след това q6h за още 24h';
        this.$uiPropery.alternativeAdministrationValue = `${parseFloat(this.selectedObject.patientWeight) * 5.5}`;
        this.$uiPropery.alternativeDescription  = 'Постоянна инфузия';
      }

      if(this.selectedObject.c2 == '20') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 5.5}`;
        this.$uiPropery.description             = '5 вливания бавно венозно q4h - след това 4 вливания q6h';
      }
    }

    if(this.selectedObject.patientType == 'cat') {

      if(this.selectedObject.c2 == '5') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 5}`;
        this.$uiPropery.description             = 'на час CRI (постоянна инфузия)';
      }

      if(this.selectedObject.c2 == '20') {
        this.$uiPropery.administrationValue     = `5 ml на котка`;
        this.$uiPropery.description             = '5 вливания бавно венозно през 6 часа - след това 4 вливания през 8 часа';
      }

      if(this.selectedObject.c2 == '7') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 8.6}`;
        this.$uiPropery.description             = 'бавно венозно, последвано от CRI (постоянна инфузия) – 1,43 мг/кг/ч ИВ за поне 36 часа';
      }

      if(this.selectedObject.c2 == '30') {
        this.$uiPropery.administrationValue     = `${parseFloat(this.selectedObject.patientWeight) * 1.3}`;
        this.$uiPropery.description             = 'ИВ като болус, последвано от постоянна инфузия (CRI) от 0,42 мг/кг/ч ИВ за 48 часа.';
      }
    }
  }

  /**
   * @author Mihail Petrov
   * @param $value
   * @returns
   */
  public calculateMassValue($value: number): string {
    return `${Math.round((100*($value * parseFloat(this.selectedObject.patientWeight)))/100)}`;
  }

}
