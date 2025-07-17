import { Injectable } from "@angular/core";
import GasAnalysisJSONCollection from "nv@json/gas-analysis.collection.json";

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public getReferencePH($formProperty: any) {
    return this.getBound('PH', $formProperty);
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public getReferenceHCO3($formProperty: any) {
    return this.getBound('HCO3', $formProperty);
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public getReferencePCO2($formProperty: any) {
    return this.getBound('PCO2', $formProperty);
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public getReferencePO2($formProperty: any) {
    return this.getBound('PO2', $formProperty);
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public getReferenceBE($formProperty: any) {
    return this.getBound('BE', $formProperty);
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculateHCO3($formProperty: any) {

    const {lowerBownd, upperBownd} = this.getReferenceHCO3($formProperty);

    if($formProperty.HCO3 < lowerBownd) return -1;
    if($formProperty.HCO3 > upperBownd) return 1;
    return 0;
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculatePCO2($formProperty: any) {

    const {lowerBownd, upperBownd} = this.getReferencePCO2($formProperty);

    if($formProperty.PCO2 < lowerBownd) return -1;
    if($formProperty.PCO2 > upperBownd) return 1;
    return 0;
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculatePO2($formProperty: any) {

    const {lowerBownd, upperBownd} = this.getReferencePO2($formProperty);

    if($formProperty.PO2 < lowerBownd) return -1;
    if($formProperty.PO2 > upperBownd) return 1;
    return 0;
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculatePH($formProperty: any) {

    const {lowerBownd, upperBownd} = this.getReferencePH($formProperty);

    if($formProperty.PH < lowerBownd) return -1;
    if($formProperty.PH > upperBownd) return 1;
    return 0;
  }



  /**
   * @autjor Mihail Petrov
   * @param $formProperty
   * @returns
   */
  public calculateBE($formProperty: any) {

    const {lowerBownd, upperBownd} = this.getReferenceBE($formProperty);

    if($formProperty.BE < lowerBownd) return -1;
    if($formProperty.BE > upperBownd) return 1;
    return 0;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public calculateAnionGap($formProperty: any) {

    let value = (parseFloat($formProperty.Na) + parseFloat($formProperty.K)) -
                  (parseFloat($formProperty.Cl) + parseFloat($formProperty.HCO3));

    return parseFloat(value.toFixed(2));
  }


  public getAgLevel($formProperty: any) {

    const animalType  = this.getAnimalType($formProperty);
    const agValue     = this.calculateAnionGap($formProperty);

    if(animalType == 'dog') {
      if(agValue < 12) return -1;
      if(agValue > 35) return 1;
      return 0;
    }

    if(animalType == 'cat') {
      if(agValue < 13) return -1;
      if(agValue > 27) return 1;
      return 0;
    }

    return null;
  }

  public getLevel(value: any): {icon: string, color: string} {

    if(value == 1 ) return  { icon: 'arrow-up-outline', color: 'warning'};
    if(value == -1) return  { icon: 'arrow-down-outline', color: 'danger'};
    return { icon: 'pause-outline', color: 'success'};
  }


  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  private getBound($key: string, $formProperty: any) {

    const animalType  = this.getAnimalType($formProperty);
    const bloodOrigin = this.getBloodOrigin($formProperty);
    const table       = JSON.parse(JSON.stringify(GasAnalysisJSONCollection))[$key];

    const lowerBownd = table[animalType][bloodOrigin].start;
    const upperBownd = table[animalType][bloodOrigin].end;

    return { lowerBownd, upperBownd };
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  private getAnimalType($formProperty: any) {
    return $formProperty.animalType ? "dog" : "cat";
  }

  /**
   * @author Mihail Petrov
   * @param $formProperty
   * @returns
   */
  private getBloodOrigin($formProperty: any) {
    return $formProperty.bloodOrigin ? "arteria" : "vein";
  }
}
