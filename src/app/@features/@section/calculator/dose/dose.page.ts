import { Component, inject  } from '@angular/core';
import { MenuController     } from '@ionic/angular';
import { PatientModel       } from 'nv@models/patient.model';
import { DataService        } from 'nv@services/data.service';

@Component({
  selector    : 'page-calculator-dose',
  templateUrl : 'dose.page.html',
  styleUrls   : ['dose.page.scss']
})
export class DosePage {

  public inputSuggestionCollection: any[]  = [];
  public cardCollection: any[]      = [];

  public $componentState = {
    isPatientCreated: false
  };

  public $uiProperty = {
    title: 'Добави пациент'
  }

  public $formProperty: PatientModel = {
    patientName   : '',
    patientWeight : 0,
    patientWeightUnit   : 'kilogram',
    patientWeightNumber : 0,
    patientType   : '',
    activeMedicine: ''
  }

  private dataService: DataService = inject(DataService);

  public onInput($event: any): void {

    const value     = $event?.detail.value;
    this.inputSuggestionCollection = this.dataService.getById(value);
  }


// Избери вид животно: any/ cat/ dog
public processSelectPatientType ($patientType: any): void {
  this.$formProperty.patientType = $patientType;

console.log(`this.$formProperty.patientType From dose.page.ts: ${this.$formProperty.patientType}`)

}

// ТЕГЛО - пресмятане
public takePatientWeightUnit(): void {

  //console.log(`patientWeightUnit: ${this.$formProperty.patientWeightUnit}`)
  this.$formProperty.patientWeightNumber = this.$formProperty.patientWeight;

  if (this.$formProperty.patientWeightUnit == "kilogram") {
    //console.log(`patientWeightNumber: ${this.$formProperty.patientWeightNumber}`)
  }
  else{
      this.$formProperty.patientWeightNumber /= 1000;
    //console.log(`patientWeightNumber: ${this.$formProperty.patientWeightNumber}`)
  }
}

  public processAddPatient($event: any): void {
    this.$componentState.isPatientCreated = true;
  }


  public isMedicinePickerVisible(): boolean {
    return this.$componentState.isPatientCreated == true;
  }

  public processSelectedCard($event: any) {

    this.takePatientWeightUnit();
    this.inputSuggestionCollection    = [];
    this.$formProperty.activeMedicine = '';
    this.cardCollection.push($event);
  }


  private ttt: MenuController = inject(MenuController);
  public processOpenMenu() {

    console.log("start menu item");

    this.ttt.close('first-menu')
    this.ttt.open('first-menu')
  }
}
