import { Component, OnInit, inject  } from '@angular/core';
import { DialogService      } from 'nv@services/dialog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector    : 'page-reticulocyte-count',
  templateUrl : 'reticulocyte-count.page.html',
  styleUrl    : 'reticulocyte-count.page.scss'
})
export class ReticulocyteCount {

  private dialogService: DialogService  = inject(DialogService);
  private $router: ActivatedRoute       = inject(ActivatedRoute);

  public $ui = {
    normalRangeHct                  : 0,
    correctedReticulocytePercentage : 0,
    reticulocyteIndex               : 0,
    reticulocytePercent             : 0,
    absoluteReticulocyteCount       : 0,
    typeOfAnemia                    : '',
    degreeOfRegeneration            : '',
    reticulocyteProductionIndex     : 0
  };

  reticulocyteLifespan: number | undefined;


  public $formProperty: any = {
    animalType                : "dog",
    erythrocyteCounter        : 0,
    reticulocyteCounter       : 0,
    reticulocyteCount         : 0,
    absoluteErythrocyteCount  : 0,
    patientHct                : 0
  }

  public selectAnimalType($event: any) {
    this.$formProperty.animalType = ($event.detail.checked) ? 'cat' : 'dog';
    console.log(`animalType: ${this.$formProperty.animalType}`)
  }

  public incrementReticulocyteCounter() {
    this.$formProperty.erythrocyteCounter++;
    this.$formProperty.reticulocyteCounter++;
    console.log(`reticulocyteCounter: ${this.$formProperty.reticulocyteCounter}`)
  }

  public incrementErythrocyteCounter() {
    this.$formProperty.erythrocyteCounter++;
    console.log(`erythrocyteCounter: ${this.$formProperty.erythrocyteCounter}`)
  }

  public processCalculationRPI(): void {
    this.$ui.reticulocytePercent = ( this.$formProperty.reticulocyteCounter / this.$formProperty.erythrocyteCounter ) * 100;

    if(this.$formProperty.animalType == 'cat') {
      this.$ui.normalRangeHct = 35;
    } else if(this.$formProperty.animalType == 'dog') {
      this.$ui.normalRangeHct = 45;
    }

    this.$ui.correctedReticulocytePercentage = Math.round(( this.$ui.reticulocytePercent * ( this.$formProperty.patientHct / this.$ui.normalRangeHct ) )*100)/100

    this.$ui.reticulocyteIndex = Math.round(( this.$ui.reticulocytePercent * ( this.$formProperty.patientHct / this.$ui.normalRangeHct ) * 0.5 )*100)/100

    this.$ui.absoluteReticulocyteCount = Math.round((this.$ui.reticulocytePercent / 100) * ( this.$formProperty.absoluteErythrocyteCount * 1000 )*100 ) /100;

    if(this.$formProperty.animalType == 'cat') {

      if(this.$ui.correctedReticulocytePercentage > 0.4) {
        this.$ui.typeOfAnemia = 'Regenerative';
      } else {
        this.$ui.typeOfAnemia = 'Non-regenerative';
      }

      if(this.$ui.absoluteReticulocyteCount < 61 ) {
        this.$ui.degreeOfRegeneration = 'no regeneration';
      } else if(this.$ui.absoluteReticulocyteCount >= 61 && this.$ui.absoluteReticulocyteCount <= 85 ) {
          this.$ui.degreeOfRegeneration = 'equivocal';
      } else if(this.$ui.absoluteReticulocyteCount >= 86 && this.$ui.absoluteReticulocyteCount <= 100 ) {
          this.$ui.degreeOfRegeneration = 'mild';
      } else if(this.$ui.absoluteReticulocyteCount > 101 && this.$ui.absoluteReticulocyteCount <= 200 ) {
          this.$ui.degreeOfRegeneration = 'moderate';
      } else if(this.$ui.absoluteReticulocyteCount >= 200 ) {
          this.$ui.degreeOfRegeneration = 'marked';
      }
    }
    else if(this.$formProperty.animalType == 'dog') {
      if(this.$ui.correctedReticulocytePercentage > 1) {
        this.$ui.typeOfAnemia = 'Regenerative';
      } else {
        this.$ui.typeOfAnemia = 'Non-regenerative';
      }

      if(this.$ui.absoluteReticulocyteCount < 92 ) {
        this.$ui.degreeOfRegeneration = 'no regeneration';
      } else if(this.$ui.absoluteReticulocyteCount >= 93 && this.$ui.absoluteReticulocyteCount <= 153 ) {
        this.$ui.degreeOfRegeneration = 'equivocal';
      } else if(this.$ui.absoluteReticulocyteCount >= 154 && this.$ui.absoluteReticulocyteCount <= 200 ) {
          this.$ui.degreeOfRegeneration = 'mild';
      } else if(this.$ui.absoluteReticulocyteCount > 201 && this.$ui.absoluteReticulocyteCount <= 300 ) {
            this.$ui.degreeOfRegeneration = 'moderate';
      } else if(this.$ui.absoluteReticulocyteCount >= 300 ) {
            this.$ui.degreeOfRegeneration = 'marked';
      }

          // After calculating RPI, call this to ensure lifespan is considered
    this.updateLifespanAndCalculate();
    }

  }

  // Function to calculate Reticulocyte Lifespan
  getReticulocyteLifespan(hematocrit: number): number | undefined {
    const data = [
      { hematocrit: 45, lifespan: 1.0 },
      { hematocrit: 35, lifespan: 1.5 },
      { hematocrit: 25, lifespan: 2.0 },
      { hematocrit: 15, lifespan: 2.5 }
    ];

    for (let i = 0; i < data.length - 1; i++) {
      if (hematocrit >= data[i + 1].hematocrit && hematocrit <= data[i].hematocrit) {
        const x1 = data[i + 1].hematocrit;
        const y1 = data[i + 1].lifespan;
        const x2 = data[i].hematocrit;
        const y2 = data[i].lifespan;

        return y1 + ((hematocrit - x1) / (x2 - x1)) * (y2 - y1);
      }
    }

    console.log(`hematocrit: ${hematocrit}`)

    // Return undefined if out of range
    return undefined;
  }

  public updateLifespanAndCalculate(): void {
    this.reticulocyteLifespan = this.getReticulocyteLifespan(this.$formProperty.patientHct);
    console.log(`Assigned reticulocyteLifespan: ${this.reticulocyteLifespan}`);
    this.calculateLifespan();  // Ensure this is called after assigning
  }

  public calculateLifespan(): void {
    if (this.reticulocyteLifespan !== undefined && this.$ui.reticulocytePercent !== undefined) {
      this.$ui.reticulocyteProductionIndex = Math.round((this.$ui.reticulocytePercent / this.reticulocyteLifespan)*100)/100;
      console.log(`Reticulocyte Percent: ${this.$ui.reticulocytePercent}`);
      console.log(`Reticulocyte Lifespan: ${this.reticulocyteLifespan}`);
    } else {
      // Handle the case where reticulocyteLifespan or reticulocytePercent is undefined
      console.error('Reticulocyte lifespan or percent is undefined.');
    }
  }


  public clearAllValues() {

    this.$formProperty = {
      erythrocyteCounter        : 0,
      reticulocyteCounter       : 0,
      reticulocyteCount         : 0,
      patientHct                : 0,
      normalRangeHct            : 0
    }
  }


}
