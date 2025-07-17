import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
  selector    : 'nv-link-button',
  templateUrl : './nv-link-button.component.html',
  styleUrl    : './nv-link-button.component.scss',
  standalone  : true,
  imports     : [
    IonicModule
  ]
})
export class NvLinkButtonComponent {

  @Input({ required: true })
  public inputTitle = '';

  @Output()
  public onClick = new EventEmitter();

  /**
   * @author Mihail Petrov
   */
  public processOnClick() {
    this.onClick.emit();
  }
}
