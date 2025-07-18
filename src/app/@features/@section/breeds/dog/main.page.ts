import { Component, OnInit, inject  } from '@angular/core';

import { DialogService              } from 'nv@services/dialog.service';
import { DetailModal                } from './@modal/detail/detail.component';

import { SelectCategoryModal  } from './@modal/select-category/select-category.component';
//import { DrugInfoModal        } from './@modal/drug-info/drug-info.component';
import { BreedsService              } from 'nv@services/breeds.service';


@Component({
  selector    : 'page-collection',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: BreedsService   = inject(BreedsService);
  private dialogService: DialogService  = inject(DialogService);
  public $data: any[] = [];               // Filtered data for display
  private $selectedCategories: any  = [];
  private activeFilter: string      = 'title';
  public originalData: any[] = [];        // Full data set
  public selectedAnimal: string = 'dogs'; // Default to 'dogs'

  public ngOnInit(): void {
    this.loadBreeds();
  }

  /**Loads breeds based on the selected animal (dogs or cats)*/
  loadBreeds(): void {                                              // Load data from BreedsService and store it in originalData
    this.originalData = this.$dataService.get(this.selectedAnimal); // Pass 'dogs' or 'cats'
    this.$data = [...this.originalData];                            // Initialize $data with originalData
  }

  /** Triggered when the search input changes */
  onItemSearched(searchValue: string): void {
    if (searchValue && searchValue.trim() !== '') {
      this.$data = this.$dataService.$breed(this.selectedAnimal)
        .filterByName(searchValue)
        .getFiltered();
    } else {
      this.$data = [...this.originalData];
    }
  }


  /**
   * @author Mihail Petrov
   * @param element
   */
  public async onSelectCard(element: any) {

    (await this.dialogService.open(DetailModal, {
      selectedObject: element
    }))
  }

  public findImageBreed(code: string): string {
    const imagePath = `assets/pdfs/@breeds/dog/${code}/1.png`;
    // const breed = DogBreedsJson.find((b) => b.code === code);
    // const nameBreed = breed ? breed.nameEn : 'Unknown Breed';
    // console.log(`Breed: ${nameBreed}, Generated image path: ${imagePath}`);
    return imagePath;
  }

  /**
   * Triggered when the filter modal is opened
   */
  public async onFilter($event: any): Promise<void> {
    (await this.dialogService.open(SelectCategoryModal)).whenConfirmed((collection: any) => {
      this.$selectedCategories = collection.selectedCategory;
      this.processGetItemCollection();
    });
  }

  /**
   * Process the selected categories and update the filtered breeds
   */
  private processGetItemCollection(): void {
    this.$data = this.$dataService.$breed(this.selectedAnimal)
      .filterByCategory(this.$selectedCategories)
      .getFiltered();
  }
}
