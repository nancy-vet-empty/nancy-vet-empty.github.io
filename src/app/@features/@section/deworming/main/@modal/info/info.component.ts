import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector    : 'modal--info',
  templateUrl : './info.component.html',
  styleUrl    : './info.component.scss'
})
export class InfoModal implements OnChanges {

  public selectedObject: any;
  public selectedDrugApplicationCollection: any[] = [];

  public $state = {
    species: ''
  }

  public ngOnChanges(changes: SimpleChanges): void {

    this.$state.species = this.parseSpecie(this.selectedObject.species)

  }

  /**
   * @author Mihail Petrov
   * @param value
   * @returns
   */
  public parseSpecie (value: string): string {

    if(value == 'dog' ) return 'за кучета';
    if(value == 'cat' ) return 'за котки';

    return 'за кучета и котки';
  }

  public parseType() {

  }


  /**
   * @author Mihail Petrov
   * @param url
   */
  public onOpenPdfDocument(url: string) {
    window.open(`${url}`, '_blank')?.focus();
    console.log(`link: ${url}`)
  }

  public renderImage(tag: string) {
    return tag.replace("@", "");
  }

}
