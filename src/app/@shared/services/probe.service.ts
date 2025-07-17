import { Injectable }           from "@angular/core";
import coproJsonDataSource      from "nv@json/probe/copro.collection.json";
import earJsonDataSource        from "nv@json/probe/ear.collection.json";
import skinJsonDataSource       from "nv@json/probe/skin.collection.json";
import trichogramJsonDataSource from "nv@json/probe/trichogram.collection.json";
import urineJsonDataSource      from "nv@json/probe/urine.collection.json";

@Injectable({
  providedIn: "root"
})
export class ProbeService {

  public get(groupId: string) {

    if(groupId == 'copro'       ) return coproJsonDataSource;
    if(groupId == 'ear'         ) return earJsonDataSource;
    if(groupId == 'skin'        ) return skinJsonDataSource;
    if(groupId == 'trichogram'  ) return trichogramJsonDataSource;
    if(groupId == 'urine'       ) return urineJsonDataSource;

    return [];
  }
}
