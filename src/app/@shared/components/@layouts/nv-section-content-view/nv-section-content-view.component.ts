import { Component, Input, OnInit } from "@angular/core";
import { SectionContentModel } from "nv@models/test-info.model";

@Component({
  selector    : 'nv-section-content-view',
  templateUrl : './nv-section-content-view.component.html',
  styleUrl    : './nv-section-content-view.component.scss',
  standalone  : true
})
export class NvSectionContentView {

  @Input({required: true})
  public inputSectionContent: SectionContentModel[] = [];

  /**
   * @author Mihail Petrov
   * @param data
   * @returns
   */
  public getDataExperimentalForRemoval(data: string) {
    return data.slice(1, data.length);
  }
}
