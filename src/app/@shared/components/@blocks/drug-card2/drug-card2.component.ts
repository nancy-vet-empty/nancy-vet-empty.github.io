import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DrugModel    } from "nv@models/drug.model";
import { PatientModel } from "nv@models/patient.model";

@Component({
  standalone  : true,
  selector    : 'dc-card2',
  templateUrl : './drug-card2.component.html',
  styleUrl    : './drug-card2.component.scss'
})
export class DrugCard2 implements OnInit {

  @Input({required: true  }) public template = 'item';
  @Input({required: true  }) public object!: DrugModel;
  @Input({required: true  }) public inputPatientModel!: PatientModel;

  @Output() public onSelectCard = new EventEmitter();

  public imagePath!: string;

  public $uiProperty = {
    title               : '',
    activeSubstance     : '',

    drugDose            : '0', // даденото кол-во от медикамента, от което се нуждае ЖВ (мл)
    activeSubstanceDose : '0',
    patientDose         : '0', // даденото кол-во АС, от което се нуждае даденото ЖВ (мг/ г)
    applicationMethod   : '',

    medicationConcentration : '0',
    medicationConcentrationDecorator   : 'ml',
    activeSubstanceDecorator       : '',
    convertedActiveSubstanceDecorator: '',
    patientDoseDecorator: '',
    drugDoseDecorator: ''
  }

  public ngOnInit() {

    const drugProperties                                = this.calculateDose(this.inputPatientModel, this.object);

    this.imagePath                                      = this.buildAssetPath();
    this.$uiProperty.title                              = this.object.title;
    this.$uiProperty.activeSubstance                    = this.object.activeSubstance;
    this.$uiProperty.drugDose                           = String(Math.round(parseFloat(drugProperties.drugDose) * 100) / 100);
    this.$uiProperty.patientDose                        = drugProperties.patientDose;;
    this.$uiProperty.applicationMethod                  = drugProperties.applicationMethod;
    this.$uiProperty.patientDoseDecorator               = drugProperties.patientDoseDecorator;
    this.$uiProperty.drugDoseDecorator                  = drugProperties.drugDoseDecorator;
    this.$uiProperty.medicationConcentrationDecorator   = drugProperties.drugConcentrationDecorator;
    this.$uiProperty.activeSubstanceDose                = drugProperties.activeSubstanceDose;

    console.log(`this.$uiProperty.patientDose: ${this.$uiProperty.patientDose}`)

    // По-надолу отново пиша същите неща, за да може АС декоратора да ми излезе на html.
    const animalType              = this.inputPatientModel!.patientType;
    console.log(`this.$formProperty.patientType From drug-card2: ${animalType}`);
    const applicationObject       = this.object!.application[animalType];

    // To ensure that patientWeightNumber will be visible in drug-card2.component.html
    const patientWeight              = this.inputPatientModel!.patientWeightNumber;
    const drugConcentration              = this.object!.drugConcentration;

    let applicationType: string;

  if (applicationObject) {
    applicationType = animalType;
  } else {
    // Handle case where applicationObject is undefined
    console.warn(`No application properties found for animal type '${animalType}'. Falling back to 'any'.`);
    applicationType = "any";
  }

    const applicationProperties   = this.object!.application[applicationType];

    console.log(`applicationObject: ${applicationObject}`)
    console.log(`applicationType: ${applicationType}`)


      // Handle case where applicationProperties is undefined
    if (!applicationProperties) {
      // Handle the error or set default values accordingly
      throw new Error(`Application properties not defined for animal type '${animalType}'`);
    }

    const activeSubstanceDecorator                      = applicationProperties.activeSubstanceDoseDecorator;
    this.$uiProperty.convertedActiveSubstanceDecorator  = this.decoratorConvertor(applicationProperties.activeSubstanceDoseDecorator)

    // console.log(`activeSubstanceDecorator: ${activeSubstanceDecorator}`)
    // console.log(`convertedActiveSubstanceDecorator: ${this.$uiProperty.convertedActiveSubstanceDecorator}`)

    // console.log(`drugDose:${this.$uiProperty.drugDose}`)
    // console.log(`patientDose:${this.$uiProperty.patientDose}`)
    // console.log(`medicationConcentrationDecorator: ${this.$uiProperty.medicationConcentrationDecorator}`)

  }

  public processCard(): void {
    this.onSelectCard.emit(this.object);
  }

  private buildAssetPath(): string {

    if(this.object?.type == 'respiratory'       ) return `/assets/icon/respiratory.png`;
    if(this.object?.type == 'gastrointestinal'  ) return `/assets/icon/gastrointestinal.png`;
    if(this.object?.type == 'cardiovascular'    ) return `/assets/icon/cardiovascular.png`;
    if(this.object?.type == 'urogenital'        ) return `/assets/icon/urogenital.png`;
    if(this.object?.type == 'nervous'           ) return `/assets/icon/nervous.png`;
    if(this.object?.type == 'eyes'              ) return `/assets/icon/eyes.png`;
    if(this.object?.type == 'ears'              ) return `/assets/icon/ears.png`;
    if(this.object?.type == 'skin'              ) return `/assets/icon/skin.png`;
    if(this.object?.type == 'antibiotics'       ) return `/assets/icon/antibiotics.png`;
    if(this.object?.type == 'antiparasitic'     ) return `/assets/icon/antiparasitic.png`;
    if(this.object?.type == 'endocrine'         ) return `/assets/icon/chemotherapeutics.png`;
    if(this.object?.type == 'antiinflammatory'  ) return `/assets/icon/antiinflammatory.png`;
    if(this.object?.type == 'others'            ) return `/assets/icon/others.png`;

    return ``;
  }

  private calculateDose(patientModel: PatientModel, drugModel: DrugModel) {

    // get patient characteristics
    const patientWeightNumber 	= patientModel.patientWeightNumber;

    // get drug characteristics
    const drugConcentration                 = drugModel.drugConcentration;
    const medicationConcentrationDecorator  = drugModel.drugConcentrationDecorator;


    const animalType                    = this.getPatientKey(this.inputPatientModel.patientType, this.object.application);

    const applicationProperties         = this.object.application[animalType];
    const activeSubstanceDose           = applicationProperties.activeSubstanceDose;
    const activeSubstanceDecorator      = applicationProperties.activeSubstanceDoseDecorator;
    const applicationMethod             = applicationProperties.applicationMethod;

    let patientDose:number[] = [];
    let drugDose:number[]    = [];

    const convertedActiveSubstanceDecorator = this.decoratorConvertor(applicationProperties.activeSubstanceDoseDecorator)
    // console.log(`activeSubstanceDecorator: ${activeSubstanceDecorator}`)
    // console.log(`convertedActiveSubstanceDecorator: ${convertedActiveSubstanceDecorator}`)

    //Finding decorators for patientDose and drugDose from 'medicationConcentrationDecorator' and 'convertedActiveSubstanceDecorator'

    let patientDoseDecorator: any;
    let drugDoseDecorator: any;

    if (medicationConcentrationDecorator      === "mg_ml") {
      patientDoseDecorator                    = "mg";
      drugDoseDecorator                       = "ml";
  } else if (medicationConcentrationDecorator === "ml_mg") {
      patientDoseDecorator                    = "mg";
      drugDoseDecorator                       = "ml";
  } else if (medicationConcentrationDecorator === "µg_ml") {
      patientDoseDecorator                    = "µg";
      drugDoseDecorator                       = "ml";
  } else if (medicationConcentrationDecorator === "ml") {
      patientDoseDecorator                    = "ml";
      drugDoseDecorator                       = "ml";
  } else if (medicationConcentrationDecorator === "mg_tabl") {
      patientDoseDecorator                    = "mg";
      drugDoseDecorator                       = "tabl";
  } else if (medicationConcentrationDecorator === "mg_caps") {
      patientDoseDecorator                    = "mg";
      drugDoseDecorator                       = "caps";
  }

  // console.log(`patientDoseDecorator: ${patientDoseDecorator}`)
  // console.log(`drugDoseDecorator: ${drugDoseDecorator}`)

  console.log(`activeSubstanceDose: ${activeSubstanceDose}`)


    for(const dose of  applicationProperties.activeSubstanceDose) {

      patientDose.push(patientWeightNumber * dose);

      drugDose.push((patientWeightNumber * dose) / drugConcentration);
    }

    return {
      activeSubstanceDose : activeSubstanceDose.join(' - '),
      patientDoseDecorator: patientDoseDecorator,
      drugDoseDecorator   : drugDoseDecorator,
      applicationMethod   : applicationMethod     ,
      patientDose         : patientDose.join(' - ') ,
      drugDose            : drugDose.join(' - '),

      drugConcentrationDecorator      : drugModel.drugConcentrationDecorator
    };
  }

  private getPatientKey(animalType: string, keyCollection: any): string {

    const patientTypeCollection = Object.keys(keyCollection);
    if(patientTypeCollection.includes('any')) {
      return 'any';
    }

    return animalType;
  }


  private decoratorConvertor(decorator: any) {

  // Convert decorators:
  if (decorator     == "mg_ml"        ) return "mg/ml";
  if (decorator     == "mg_tabl"      ) return "mg/tabl";
  if (decorator     == "µg_tabl"      ) return "µg/tabl";

  if (decorator     == "mg_caps"      ) return "mg/caps";
  if (decorator     == "µg_ml"        ) return "µg/ml";

  if (decorator == "g"                ) return "g";
  if (decorator == "mg_kg"            ) return "mg/kg";
  if (decorator == "µg_kg"            ) return "µg/kg";
  if (decorator == "MU_kg"            ) return "MU/kg";
  if (decorator == "ml"               ) return "ml";
  if (decorator == "ml_kg"            ) return "ml/kg";
  if (decorator == "ml_5_kg"          ) return "ml/5 kg";
  if (decorator == "ml_10_kg"         ) return "ml/10 kg";
  if (decorator == "tabl"             ) return "tabl";
  if (decorator == "tabl_5_kg"        ) return "tabl/5 kg";
  if (decorator == "tabl_2.5_kg"      ) return "tabl/2.5 kg";
  if (decorator == "tabl_10_kg"       ) return "tabl/10 kg";
  if (decorator == "caps"             ) return "caps";
  if (decorator == "caps_5_kg"        ) return "caps/5 kg";
  if (decorator == "implant"          ) return "implant";
  if (decorator == "gtt"              ) return "gtt";
  if (decorator == "gtt_2_kg"         ) return "gtt/2 kg";
  if (decorator == "cm"               ) return "cm";
  if (decorator == "sprays"           ) return "sprays";
  if (decorator == "малко количество" ) return "малко количество";
  if (decorator == "няколко капки"    ) return "няколко капки";
  if (decorator == "ampula"           ) return "ампула";
  if (decorator == "paketche"         ) return "пакетче";

    return '';
  }

}
