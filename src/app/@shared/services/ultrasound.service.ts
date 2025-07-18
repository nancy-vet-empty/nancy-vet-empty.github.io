import { Injectable }     from "@angular/core";
import orderTable         from "nv@json/ultrasound/order.table.json";
import measurementsTable  from "nv@json/ultrasound/measurements.table.json";
import pregnancyTable     from "nv@json/ultrasound/pregnancy.table.json";
import prostateTable      from "nv@json/ultrasound/prostate.table.json";

@Injectable({
  providedIn: "root"
})
export class UltrasoundService {

  public get(groupId: string) {

    if(groupId == 'order'         ) return orderTable;
    if(groupId == 'measurements'  ) return measurementsTable;
    if(groupId == 'pregnancy'     ) return pregnancyTable;
    if(groupId == 'prostate'      ) return prostateTable;

    return [];
  }
}
