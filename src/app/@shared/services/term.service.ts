import { Injectable } from "@angular/core";
import CollectionJson from "nv@json/terms.collection.json";

@Injectable({
  providedIn: "root"
})
export class TermService {

  private $intermediateCollection: any = [];

    public $terms() {
    this.$intermediateCollection = structuredClone(CollectionJson);
    return this;
  }

   public get() {
    return this.$intermediateCollection;
  }

  public getAll() {
    return CollectionJson;
  }

public getByCategoryType(filterCategory?: string) {
  // Use the intermediate (filtered) collection instead of raw JSON
  const collectionToUse = this.$intermediateCollection.length
                        ? this.$intermediateCollection
                        : structuredClone(CollectionJson);

  const resultObject: any = {};
  for (let i = 0; i < collectionToUse.length; i++) {
    let category = collectionToUse[i].type;

    if (!resultObject[category]) {
      resultObject[category] = [];
    }

    resultObject[category].push(collectionToUse[i]);
  }

  // get specific category
  if (filterCategory) {
    const resultArray = resultObject[filterCategory];
    const rrr: any = {};
    rrr[filterCategory] = resultArray;
    return rrr;
  }

  return resultObject;
}


    public filterByTitle(title: any) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return (element.title).toLowerCase().includes(title.toLowerCase()) ||
             (element.id).toLowerCase().includes(title.toLowerCase());
    });

    return this;
  }
}
