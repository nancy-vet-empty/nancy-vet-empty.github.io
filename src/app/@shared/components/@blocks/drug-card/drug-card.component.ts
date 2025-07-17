import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule  } from "@ionic/angular";
import { DrugModel    } from "nv@models/drug.model";

@Component({
  standalone  : true,
  selector    : 'dc-card',
  templateUrl : './drug-card.component.html',
  styleUrl    : './drug-card.component.scss',
  imports     : [
    CommonModule,
    IonicModule
  ]
})
export class DrugCard implements OnInit {

  @Input({required: true  }) public object: DrugModel | undefined;

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

}
