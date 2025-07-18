import { Injectable } from "@angular/core";
import buildJson from "nv@assets/build.json";

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  /**
   * @autrhor Mihail Petrov
   * @returns
   */
  public getVersion() {
    return buildJson.buildVersion;
  }
}
