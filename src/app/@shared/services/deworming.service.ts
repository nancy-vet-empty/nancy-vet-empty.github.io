import { Injectable     } from "@angular/core";
import DewormingCollectionJson from "nv@json/deworming.collection.json";

@Injectable({
  providedIn: 'root'
})
export class DewormingService {

  private $intermediateCollection: any = [];

  /**
   * @author Mihail Petrov
   * @returns
   */
  public $deworming() {

    this.$intermediateCollection = structuredClone(DewormingCollectionJson);
    return this;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public getAll() {
    return this.$intermediateCollection;
  }


  /**
   * @author Mihail Petrov
   * @param categoryElement
   * @returns
   */
  public filterByCategory(categoryElement: any) {

    if(categoryElement.length == 0) {
      return this;
    }

    const categoryCollection = categoryElement.map((element: any) => {
      return element.category;
    });

  this.$intermediateCollection = DewormingCollectionJson.filter((element: any) => {
      if (!Array.isArray(element.species)) {
        return false;
      }
      return categoryCollection.some((category: string) =>
        element.species.some((animal: string) => category.toLowerCase().includes(animal.toLowerCase()))
      );
    });

    return this;
  }


  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByTitle(title: any) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return (element.title).toLowerCase().includes(title.toLowerCase()) ||
             (element.titleBG).toLowerCase().includes(title.toLowerCase());
    });

    return this;
  }

  /**
   * @autrhor Mihail Petrov
   * @returns
   */
  public get() {
    return this.$intermediateCollection;
  }
}
