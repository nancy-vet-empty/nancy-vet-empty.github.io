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
  public $symptoms() {

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

    // this.$intermediateCollection = DewormingCollectionJson.filter((element) => {
    //   return categoryCollection.some((o: any) => (element.type).toLowerCase().includes(o.toLowerCase()));
    // });

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
      return (element.symptom).toLowerCase().includes(title.toLowerCase());
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
