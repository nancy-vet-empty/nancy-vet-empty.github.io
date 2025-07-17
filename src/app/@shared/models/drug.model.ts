export interface DrugModel {
  type: string;
  title: string;
  patientType: string;
  animalType: string;
  activeSubstance: string;
  drugConcentration: number;
  drugConcentrationDecorator: string;
  activeSubstanceDecorator: any;
  convertedActiveSubstanceDecorator: any;
  patientDoseDecorator: any,
  drugDoseDecorator: any,
  application: any;
}
