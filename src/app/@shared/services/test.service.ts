import { Injectable } from "@angular/core";
import CollectionJson from "nv@json/test-info.collection.json";

@Injectable({
  providedIn: "root"
})
export class TestService {

  public getAll() {
    return CollectionJson;
  }

  public getByCategoryType(filterCategory?: string) {

    const immutableCollection = structuredClone(CollectionJson);
    const reultObject: any         = {};
    for(let i = 0; i < immutableCollection.length; i++) {
      let category = immutableCollection[i].type;

      if(!reultObject[category]) {
        reultObject[category] = [];
        reultObject[category].push(immutableCollection[i]);
      }
      else {
        reultObject[category].push(immutableCollection[i]);
      }
    }

    // get specific category
    if(filterCategory) {
      const resultArrayy = reultObject[filterCategory];
      const rrr: any = {};
      rrr[filterCategory]  = resultArrayy;
      return rrr;
    }

    return reultObject;
  }

}
