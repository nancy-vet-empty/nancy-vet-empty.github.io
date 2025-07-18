import { Component, OnInit, inject    } from "@angular/core";
import { FluidService                 } from "../../fluid.service";

@Component({
  selector    : 'modal--fluid-result',
  templateUrl : './fluid-result-modal.component.html',
  styleUrl    : './fluid-result-modal.component.scss',
})
export class FluidResultModal implements OnInit {

  private fluidService: FluidService  = inject(FluidService);
  private selectedObject: any;

  public $uiProperty = {
    dailyDose               : 0,
    hourlyDose24            : '',
    rehydrationSixHours     : '',
    rehydrationTwelveHours  : '',
    dehydration             : 0
  }

  public ngOnInit() {

    this.$uiProperty.dailyDose              = this.fluidService.calculateDailyDose(this.selectedObject);
    this.$uiProperty.hourlyDose24           = this.fluidService.calculateHourlyDose24(this.selectedObject);
    this.$uiProperty.rehydrationSixHours    = this.fluidService.calculateRehydrationSixHours(this.selectedObject);
    this.$uiProperty.rehydrationTwelveHours = this.fluidService.calculateRehydrationTwelveHours(this.selectedObject);
    this.$uiProperty.dehydration            = this.fluidService.calculateDehydration2(this.selectedObject);
  }
}
