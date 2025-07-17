import { Injectable }   from "@angular/core";
import methodsTable     from "nv@json/methods.collection.json";

@Injectable({
  providedIn: "root"
})
export class MethodService {

  public get() {

    const collection = [];
    for(let i = 0; i < methodsTable.length; i++) {

      const element = methodsTable[i];
      // check if collection contains more type
      if(element.type.length > 1) {

        for(let row = 0; row < element.type.length; row++) {

          let e = structuredClone(element);
          e.type = [element.type[row]];
          collection.push(e);
        }
      }
      else {
        collection.push(element);
      }
    }

    return collection;
  }
}
