import { Component, OnInit, inject  } from '@angular/core';

import { DialogService              } from 'nv@services/dialog.service';
import { DetailModal                } from './@modal/detail/detail.component';

//import { SelectCategoryModal  } from './@modal/select-category/select-category.component';
//import { DrugInfoModal        } from './@modal/drug-info/drug-info.component';
import { BreedsService              } from 'nv@services/breeds.service';
import DogBreedsJson                from "nv@json/breeds-dog.collection.json";


@Component({
  selector    : 'page-collection',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {


  private $probeService: BreedsService     	  = inject(BreedsService);
  private dialogService: DialogService      = inject(DialogService);

  public $data: any;

  public ngOnInit(): void {
    this.$data = this.$probeService.get('cats');
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
    const imagePath = `assets/pdfs/@breeds/cat/${code}/1.png`;
    // const breed = DogBreedsJson.find((b) => b.code === code);
    // const nameBreed = breed ? breed.nameEn : 'Unknown Breed';
    // console.log(`Breed: ${nameBreed}, Generated image path: ${imagePath}`);
    return imagePath;
  }

}
