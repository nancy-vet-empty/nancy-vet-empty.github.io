import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FluidService {

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculateDailyDose($formProperty: any) {

    return  this.calculateMaintanence($formProperty)   +
            this.calculateDehydration($formProperty)   +
            this.calculateOngoingLosses($formProperty) -
            this.calculateLiquidIntakePerHour($formProperty);
  }


  public calculateRehydrationMaintenance($formProperty: any) {
    return  this.calculateMaintanence($formProperty)   +
            this.calculateOngoingLosses($formProperty) -
            this.calculateLiquidIntakePerHour($formProperty);
  }

  public calculateRehydrationSixHours($formProperty: any) {
    return (((this.calculateRehydrationMaintenance($formProperty) / 4) + this.calculateDehydration($formProperty))/6).toFixed(1);
  }

    public calculateRehydrationTwelveHours($formProperty: any) {
    return (((this.calculateRehydrationMaintenance($formProperty) / 2) + this.calculateDehydration($formProperty))/12).toFixed(1);
  }

  public calculateHourlyDose24($formProperty: any) {
    return (this.calculateDailyDose($formProperty) / 24).toFixed(1);
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateMaintanence($formProperty: any) {
    return (30 * $formProperty.patientWeight) + 70;
  }


  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateOngoingLosses($formProperty: any) {

    const sensible  =   $formProperty.urineValue +
                        $formProperty.vomitValue +
                        $formProperty.diariaValue;

    const insensible =  ($formProperty.patientWeight * 20)/4;

    return sensible + insensible;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateDehydration($formProperty: any) {
    return Number(($formProperty.dehydrationValue * $formProperty.patientWeight * 1000).toFixed(1));
  }

  public calculateDehydration2($formProperty: any) {
    return (this.calculateDehydration($formProperty));
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  private calculateLiquidIntakePerHour($formProperty: any) {
    return $formProperty.liquidIntakePerHour * 6;
  }
}
