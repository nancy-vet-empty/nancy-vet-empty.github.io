import { Injectable }   from "@angular/core";
import bloodSmear       from "nv@json/hematology/blood-smear-method.table.json";
import bloodSmearCollection from "nv@json/hematology/blood-smear.collection.json"

@Injectable({
  providedIn: "root"
})
export class BloodSmearService {

  public get(groupId: string) {

    if(groupId == 'blood-smear-method'      ) return bloodSmear;
    if(groupId == 'blood-smear-collection'  ) return bloodSmearCollection;
    return [];
  }
}
