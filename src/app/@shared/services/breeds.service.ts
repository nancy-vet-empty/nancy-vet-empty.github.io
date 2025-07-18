import { Injectable }           from "@angular/core";
import DogBreedsJson            from "nv@json/breeds-dog.collection.json";
import CatBreedsJson            from "nv@json/breeds-cat.collection.json";

@Injectable({
  providedIn: "root"
})
export class BreedsService {

  private $intermediateCollection: any = [];

  public $breed(animalType: string) {
    // Initialize $intermediateCollection based on selected animal type
    this.$intermediateCollection = animalType === 'dogs' ? structuredClone(DogBreedsJson) : structuredClone(CatBreedsJson);
    return this;
  }

  public get(groupId: string) {

    if(groupId == 'dogs'      ) return DogBreedsJson;
    if(groupId == 'cats'      ) return CatBreedsJson;
    return [];
  }


  public filterByCategory(selectedCategories: any[]) {
    if (!selectedCategories || selectedCategories.length === 0) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return selectedCategories[0].category.includes(element.group);
    });

    return this;
  }

  public filterByName(name: string) {
    if (!name) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return element.name.toLowerCase().includes(name.toLowerCase()) || element.nameEn.toLowerCase().includes(name.toLowerCase());
    });

    return this;
  }

  public getFiltered() {
    return this.$intermediateCollection;
  }

}
