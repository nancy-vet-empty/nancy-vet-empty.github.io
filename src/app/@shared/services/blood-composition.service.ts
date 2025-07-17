import { Injectable }   from "@angular/core";
import teethTable       from "nv@json/trivia/teeth.table.json";

@Injectable({
  providedIn: "root"
})
export class BloodCompositionService {

  public get(groupId: string) {

    if(groupId == 'teeth'       ) return teethTable;

    return [];
  }
}
