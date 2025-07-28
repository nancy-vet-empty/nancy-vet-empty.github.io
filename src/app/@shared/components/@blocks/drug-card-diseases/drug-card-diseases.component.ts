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
//That's the real path for Diseases icons:
    if(this.object?.type == 'infectious'      ) return `/assets/icon/diseases/1-infectious.png`;
    if(this.object?.type == 'parasitic'       ) return `/assets/icon/diseases/2-parasitic.png`;
    if(this.object?.type == 'neoplasms'       ) return `/assets/icon/diseases/3-neoplasms.png`;
    if(this.object?.type == 'blood'           ) return `/assets/icon/diseases/4-blood.png`;
    if(this.object?.type == 'nervous'         ) return `/assets/icon/diseases/5-nervous.png`;
    if(this.object?.type == 'eye'             ) return `/assets/icon/diseases/6-eye.png`;
    if(this.object?.type == 'ear'             ) return `/assets/icon/diseases/7-ear.png`;
    if(this.object?.type == 'mental'          ) return `/assets/icon/diseases/8-mental.png`;
    if(this.object?.type == 'endocrine'       ) return `/assets/icon/diseases/9-endocrine.png`;
    if(this.object?.type == 'circulatory'     ) return `/assets/icon/diseases/10-circulatory.png`;
    if(this.object?.type == 'respiratory'     ) return `/assets/icon/diseases/11-respiratory.png`;
    if(this.object?.type == 'digestive'       ) return `/assets/icon/diseases/12-digestive.png`;
    if(this.object?.type == 'skin'            ) return `/assets/icon/diseases/13-skin.png`;
    if(this.object?.type == 'muskuloskeletal' ) return `/assets/icon/diseases/14-muskuloskeletal.png`;
    if(this.object?.type == 'genitourinary'   ) return `/assets/icon/diseases/15-genitourinary.png`;
    if(this.object?.type == 'pregnancy'       ) return `/assets/icon/diseases/16-pregnancy.png`;
    if(this.object?.type == 'congenital'      ) return `/assets/icon/diseases/17-congenital.png`;
    if(this.object?.type == 'injuries'        ) return `/assets/icon/diseases/18-injuries.png`;

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
