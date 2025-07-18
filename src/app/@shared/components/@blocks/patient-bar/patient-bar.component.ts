import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule  } from "@ionic/angular";
import { DrugModel    } from "nv@models/drug.model";

@Component({
  standalone  : true,
  selector    : 'dc-card',
  templateUrl : './patient-bar.component.html',
  styleUrl    : './patient-bar.component.scss',
  imports     : [
    CommonModule,
    IonicModule
  ]
})
export class PatientBar implements OnInit {

  @Input({required: true  }) public object: DrugModel | undefined;

  @Input() public inputPetName: string = '';
  @Input() public inputSubTitle: string = '';
  @Input() public inputOwnerName: string = '';
  @Input() public inputPetsDiseases: string = '';

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

    if(this.object?.animalType == 'котка' ) return `/assets/icon/picker/cat.png`;
    if(this.object?.animalType == 'куче'  ) return `/assets/icon/picker/dog.png`;

    return ``;
  }

}
