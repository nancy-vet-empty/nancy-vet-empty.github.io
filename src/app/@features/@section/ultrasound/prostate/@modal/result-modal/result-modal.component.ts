import { Component } from "@angular/core";

@Component({
  selector    : 'modal--result',
  templateUrl : './result-modal.component.html',
  styleUrl    : './result-modal.component.scss',
})
export class ResultModal {
  public selectedObject: any;
}
