import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule  } from '@ionic/angular';

import { DataService  } from 'nv@services/data.service';

@Component({
  selector    : 'category-picker',
  templateUrl : './category-picker.component.html',
  styleUrl    : './category-picker.component.scss',
  standalone  : true,
  imports     : [
    IonicModule,
    CommonModule
  ]
})
export class CategoryPickerComponent implements OnInit {

  @Input()
  public inputPreset: any;

  @Output()
  public onSelect = new EventEmitter();

  private $dataService: DataService = inject(DataService);

  public imageCollection: any;
  private $selectedCategories: any  = [];

  public ngOnInit() {
    this.imageCollection = this.$dataService.getAllCategories(this.inputPreset);
  }

  /**
   * @author Mihail Petrov
   * @param category
   */
  /**Филтриране на заболявания: втора функция, която се изпълнява. */
  public selectCategory(category: any) {

    category.isSelected = !category.isSelected;

    // Clear the selected categories array before pushing new selections
    this.$selectedCategories = [];

    this.imageCollection.forEach((element: any) => {
      if(element.isSelected) this.$selectedCategories.push(element);
    });

    this.onSelect.emit(this.$selectedCategories);
  }


  /**
   * @author Mihail Petrov
   */
  public resetAllCategories() {

    this.$selectedCategories = [];

    this.imageCollection.map((element: any) => {
      element.isSelected = false;
    });
  }
}
