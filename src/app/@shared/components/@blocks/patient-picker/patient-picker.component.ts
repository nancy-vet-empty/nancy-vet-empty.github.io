import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule  } from "@ionic/angular";

@Component({
  selector    : 'dc-patient-picker',
  templateUrl : './patient-picker.component.html',
  styleUrl    : './patient-picker.component.scss',
  standalone  : true,
  imports     : [
    IonicModule,
    CommonModule
  ]
})
export class PatientPicker {

  @Output()
  public onSelected = new EventEmitter();

  public $componentState: { buttonSelectedType: string | null } = {
    buttonSelectedType: null
  };

  /**
   * @author Mihail Petrov
   * @param $type
   * @returns string
   */
  public getElementClass($type: string): string {

    const isSpecificElementSelected = $type == this.$componentState.buttonSelectedType;

    return isSpecificElementSelected
      ? `selected-element`
      : `normal-element`;
  }

  /**
   * @author Mihail Petrov
   * @param $type
   */
  public processPatientSelect($type: string): void {

    this.$componentState.buttonSelectedType = $type;
    this.onSelected.emit($type);
  }
}
