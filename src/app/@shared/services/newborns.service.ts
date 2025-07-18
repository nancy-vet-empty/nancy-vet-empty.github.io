import { Injectable }   from "@angular/core";
import growthTable      from "nv@json/newborns/growth.table.json";
import criticalTable    from "nv@json/newborns/critical.table.json";
import feedingTable     from "nv@json/newborns/feeding.table.json";

@Injectable({
  providedIn: "root"
})
export class NewbornsService {

  public get(groupId: string) {

    if(groupId == 'growth'      ) return growthTable;
    if(groupId == 'critical'    ) return criticalTable;
    if(groupId == 'feeding'     ) return feedingTable;

    return [];
  }
}
