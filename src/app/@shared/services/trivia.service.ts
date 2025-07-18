import { Injectable }   from "@angular/core";
import teethTable       from "nv@json/trivia/teeth.table.json";
import genderTable      from "nv@json/trivia/gender.table.json";
import indicatorsTable  from "nv@json/trivia/indicators.table.json";
import dispersalTable   from "nv@json/trivia/dispersal.table.json";

@Injectable({
  providedIn: "root"
})
export class TriviaService {

  public get(groupId: string) {

    if(groupId == 'teeth'       ) return teethTable;
    if(groupId == 'gender'      ) return genderTable;
    if(groupId == 'indicators'  ) return indicatorsTable;
    if(groupId == 'dispersal'   ) return dispersalTable;

    return [];
  }
}
