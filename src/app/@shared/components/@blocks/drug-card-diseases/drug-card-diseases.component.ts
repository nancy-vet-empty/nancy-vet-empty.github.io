import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule  } from "@ionic/angular";

@Component({
  standalone  : true,
  selector    : 'dc-card-diseases',
  templateUrl : './drug-card-diseases.component.html',
  styleUrl    : './drug-card-diseases.component.scss',
  imports     : [
    CommonModule,
    IonicModule
  ]
})
export class DrugCardDiseases implements OnInit {

  @Input({required: true  }) public object: any;

  @Input() public inputTitle: string = '';
  @Input() public inputSubTitle: string = '';

  @Output() public onSelectCard = new EventEmitter();

  public imagePath!: string;

  public ngOnInit() {
    this.imagePath = this.buildAssetPath();
  }

  public processCard() {
    this.onSelectCard.emit(this.object);
  }

  /**
   * @author Mihail Petrov
   * @param data
   * @returns
   */
  public convert(data: any) {

    if(Array.isArray(data) && data.length > 0) {
      return data[0];
    }

    return data;
  }

    private buildAssetPath(): string {

    if(this.object?.type == 'infectious'      ) return `/assets/pdfs/@diseases/icons/1-infectious.png`;
    if(this.object?.type == 'parasitic'       ) return `/assets/pdfs/@diseases/icons/2-parasitic.png`;
    if(this.object?.type == 'neoplasms'       ) return `/assets/pdfs/@diseases/icons/3-neoplasms.png`;
    if(this.object?.type == 'blood'           ) return `/assets/pdfs/@diseases/icons/4-blood.png`;
    if(this.object?.type == 'nervous'         ) return `/assets/pdfs/@diseases/icons/5-nervous.png`;
    if(this.object?.type == 'eye'             ) return `/assets/pdfs/@diseases/icons/6-eye.png`;
    if(this.object?.type == 'ear'             ) return `/assets/pdfs/@diseases/icons/7-ear.png`;
    if(this.object?.type == 'mental'          ) return `/assets/pdfs/@diseases/icons/8-mental.png`;
    if(this.object?.type == 'endocrine'       ) return `/assets/pdfs/@diseases/icons/9-endocrine.png`;
    if(this.object?.type == 'circulatory'     ) return `/assets/pdfs/@diseases/icons/10-circulatory.png`;
    if(this.object?.type == 'respiratory'     ) return `/assets/pdfs/@diseases/icons/11-respiratory.png`;
    if(this.object?.type == 'digestive'       ) return `/assets/pdfs/@diseases/icons/12-digestive.png`;
    if(this.object?.type == 'skin'            ) return `/assets/pdfs/@diseases/icons/13-skin.png`;
    if(this.object?.type == 'muskuloskeletal' ) return `/assets/pdfs/@diseases/icons/14-muskuloskeletal.png`;
    if(this.object?.type == 'genitourinary'   ) return `/assets/pdfs/@diseases/icons/15-genitourinary.png`;
    if(this.object?.type == 'pregnancy'       ) return `/assets/pdfs/@diseases/icons/16-pregnancy.png`;
    if(this.object?.type == 'congenital'      ) return `/assets/pdfs/@diseases/icons/17-congenital.png`;
    if(this.object?.type == 'injuries'        ) return `/assets/pdfs/@diseases/icons/18-injuries.png`;

    return ``;
  }


  public getClassName() {

    if(this.object?.type == 'infectious'      ) return `infectious`;
    if(this.object?.type == 'parasitic'       ) return `parasitic`;
    if(this.object?.type == 'neoplasms'       ) return `neoplasms`;
    if(this.object?.type == 'blood'           ) return `blood`;
    if(this.object?.type == 'nervous'         ) return `nervous`;
    if(this.object?.type == 'eye'             ) return `eye` ;
    if(this.object?.type == 'ear'             ) return `ear` ;
    if(this.object?.type == 'mental'          ) return `mental`;
    if(this.object?.type == 'endocrine'       ) return `endocrine`;
    if(this.object?.type == 'circulatory'     ) return `circulatory`;
    if(this.object?.type == 'respiratory'     ) return `respiratory`;
    if(this.object?.type == 'digestive'       ) return `digestive`;
    if(this.object?.type == 'skin'            ) return `skin`;
    if(this.object?.type == 'muskuloskeletal' ) return `muskuloskeletal`;
    if(this.object?.type == 'genitourinary'   ) return `genitourinary`;
    if(this.object?.type == 'pregnancy'       ) return `pregnancy`;
    if(this.object?.type == 'congenital'      ) return `congenital`;
    if(this.object?.type == 'injuries'        ) return `injuries`;
    return '';
  }

  public getTitle() {

    if(this.object?.type == 'infectious'      ) return `Инфекциозни заболявания`;
    if(this.object?.type == 'parasitic'       ) return `Паразитни заболявания`;
    if(this.object?.type == 'neoplasms'       ) return `Новообразувания`;
    if(this.object?.type == 'blood'           ) return `Болести на кръвта и имунната система`;
    if(this.object?.type == 'nervous'         ) return `Болести на нервната система`;
    if(this.object?.type == 'eye'             ) return `Болести на окото`;
    if(this.object?.type == 'ear'             ) return `Болести на ухото`;
    if(this.object?.type == 'mental'          ) return `Поведенчески разстройства`;
    if(this.object?.type == 'endocrine'       ) return `Болести на ендокринната система`;
    if(this.object?.type == 'circulatory'     ) return `Болести на кръвообращението`;
    if(this.object?.type == 'respiratory'     ) return `Болести на дихателната система`;
    if(this.object?.type == 'digestive'       ) return `Болести на храносмилателната система`;
    if(this.object?.type == 'skin'            ) return `Болести на кожата`;
    if(this.object?.type == 'muskuloskeletal' ) return `Болести на костно-мускулната система`;
    if(this.object?.type == 'genitourinary'   ) return `Болести на пикочо-половата система`;
    if(this.object?.type == 'pregnancy'       ) return `Бременност и раждане`;
    if(this.object?.type == 'congenital'      ) return `Вродени аномалии`;
    if(this.object?.type == 'injuries'        ) return `Травми и отравяния`;
    return '';
  }

}
