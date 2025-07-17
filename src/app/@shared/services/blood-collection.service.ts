import { Injectable }           from "@angular/core";
import tubesJsonDataSource      from "nv@json/hematology/tubes.collection.json";
import anemiaJsonDataSource      from "nv@json/hematology/anemia.collection.json";
import neadleJsonDataSource from "nv@json/hematology/needle-gauges.collection.json"

@Injectable({
  providedIn: "root"
})
export class BloodCollectionService {

  public get(groupId: string) {

    if(groupId == 'tubes'         ) return tubesJsonDataSource;
    if(groupId == 'anemia-types'  ) return anemiaJsonDataSource;
    if(groupId == 'needle'        ) return neadleJsonDataSource;

    return [];
  }
}
