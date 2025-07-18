import { Injectable }   from "@angular/core";
import methodsTable     from "nv@json/methods.collection.json";

@Injectable({
  providedIn: "root"
})
export class MethodService {

  private $intermediateCollection: any = [];

  public $methods() {
    this.$intermediateCollection = structuredClone(methodsTable);
    return this;
  }



  public filterByCategory(selectedCategories: any[]) {


    // if(categoryElement.length == 0) {
    //   return this;
    // }

    // const categoryCollection = categoryElement.map((element: any) => {
    //   return element.category;
    // });

    // this.$intermediateCollection = methodsTable.filter((element) => {
    //   return categoryCollection.some((o: any) => (element.type).toLowerCase().includes(o.toLowerCase()));
    // });

    // return this;

    if (!selectedCategories || selectedCategories.length === 0) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return selectedCategories[0].category.includes(element.type);
    });

    return this;
  }


  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
//   If title is falsy (e.g., null, undefined, or an empty string), the method does nothing and just returns the current object (this).
// This acts as a guard clause to prevent unnecessary filtering when there's no search input.
// Each element is tested:
//   - If either `element.title` or `element.titleEn` contains the input `title` (case-insensitively).
//   - If **yes**, it's included in the new filtered collection.

  public filterByTitle(title: any) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
        return (element.title).toLowerCase().includes(title.toLowerCase()) ||
               (element.titleEn).toLowerCase().includes(title.toLowerCase());
    });

    // console.log("РАБОТИ!!!");

    return this;
  }



  public get() {

    return this.$intermediateCollection;
  }
}
