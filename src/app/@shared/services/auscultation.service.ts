import { Injectable }   from "@angular/core";
import heartTable       from "nv@json/auscultation/auscultation-heart.collection.json";
import lungsTable       from "nv@json/auscultation/auscultation-lungs.collection.json";

@Injectable({
  providedIn: "root"
})
export class AuscultationService {

  public get(groupId: string) {

    if(groupId == 'heart'       ) return heartTable;
    if(groupId == 'lungs'       ) return lungsTable;

    return [];
  }
}
