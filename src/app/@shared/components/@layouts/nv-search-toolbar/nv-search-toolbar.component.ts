import { Component, EventEmitter, Output  } from "@angular/core";
import { IonicModule                      } from "@ionic/angular";

@Component({
  selector    : 'nv-search-toolbar',
  templateUrl : './nv-search-toolbar.component.html',
  styleUrl    : './nv-search-toolbar.component.scss',
  standalone  : true,
  imports     : [
    IonicModule
  ]
})
export class NvSearchToolbarComponent {

  @Output() public onSearch = new EventEmitter();
  @Output() public onFilter = new EventEmitter();

  /**
   * @author Mihail Petrov
   */
  public processOnSearch($event: any) {
    this.onSearch.emit($event.detail.value);
  }

  /**
   * @author Mihail Petrov
   */
  public processOnFilter($event: any) {
    this.onFilter.emit();
  }

}
