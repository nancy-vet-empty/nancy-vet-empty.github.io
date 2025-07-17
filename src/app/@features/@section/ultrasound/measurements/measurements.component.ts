import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent {

  public $formProperty = {
    animalType  : "dog",
    when        : "before"
  };

  public selectAnimalType($event: any) {
    this.$formProperty.animalType = ($event.detail.checked) ? 'cat' : 'dog';
  }

}
