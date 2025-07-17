import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule  } from "@ionic/angular";

@Component({
  standalone  : true,
  selector    : 'dc-card-deworming',
  templateUrl : './drug-card-deworming.component.html',
  styleUrl    : './drug-card-deworming.component.scss',
  imports     : [
    CommonModule,
    IonicModule
  ]
})
export class DrugCardDeworming implements OnInit {

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



    if(this.object?.species == 'dog'  ) return `/assets/icon/picker/dog.png`;
    if(this.object?.species == 'cat'  ) return `/assets/icon/picker/cat.png`;
    if(this.object?.species == 'both' ) return `/assets/icon/picker/animals.png`;

    return ``;
  }


  public getClassName() {

    if(this.object?.typeDeworming === 'external') return 'pill-blue';
    if(this.object?.typeDeworming === 'internal') return 'pill-red';
    if(this.object?.typeDeworming === 'both'    ) return 'pill-orange';
    return '';
  }

  public getTitle() {

    if(this.object?.typeDeworming === 'external') return 'външен';
    if(this.object?.typeDeworming === 'internal') return 'вътрешен';
    if(this.object?.typeDeworming === 'both'    ) return 'смесен';
    return '';
  }

}
