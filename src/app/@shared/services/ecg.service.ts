import { Injectable }   from "@angular/core";
import EcgCollection    from "nv@json/ecg.collection.json"

@Injectable({
  providedIn: "root"
})
export class EcgService {

  public get(groupId: string) {

    if(groupId == 'ecg'      ) return EcgCollection;
    return [];
  }
}
