import { Injectable }           from "@angular/core";
import DogBreedsJson            from "nv@json/breeds-dog.collection.json";
import CatBreedsJson            from "nv@json/breeds-cat.collection.json";

@Injectable({
  providedIn: "root"
})
export class BreedsService {

  private DataJson: any = [];

  private $intermediateCollection: any = [];

  public constructor() {

    const b: any  = []
    this.DataJson = b.concat(DogBreedsJson, CatBreedsJson);

    this.$intermediateCollection = structuredClone(this.DataJson);
  }

  public select() {

    const b: any  = []
    this.DataJson = b.concat(DogBreedsJson, CatBreedsJson);

    this.$intermediateCollection = structuredClone(this.DataJson);
    return this;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public getAll(): any {
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

    this.$intermediateCollection = this.DataJson.filter((element: any) => {
      return categoryCollection.some((o: any) => (element.type).toLowerCase().includes(o.toLowerCase()));
    });

    return this;
  }

    /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  /** Филтриране на заболявания: Пета функция */
  public filterByAnimalType(categoryElement: any) {

    if (categoryElement.length === 0) {
      return this;
    }

    const categoryCollection = categoryElement.map((element: any) => {
      return element.category;
    });

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return categoryCollection.some((o: any) => element.animals.includes(o));
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
      return (element.title).toLowerCase().includes(title.toLowerCase());
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByPrimary(id: string, title: string) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return ((element[id]).toLowerCase()).includes(title.toLowerCase());
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param value
   * @param withAproximation
   */
  public getById(value: string, withAproximation = false): any {

    if(!value || value.length == 0) {
      return [];
    }

    const resultCollection = [];
    for(let index = 0; index < this.DataJson.length; index++ ) {

      const element = this.DataJson[index];
      const title   = element.title.toLowerCase();

      if(title.includes(value.toLowerCase())) {
        resultCollection.push(element);
      }
    }

    return resultCollection;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public get() {
    return this.$intermediateCollection.filter((e: any) => e.isVisible == true);
  }
}
