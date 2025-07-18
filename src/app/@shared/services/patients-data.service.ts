import { Injectable }         from "@angular/core";
import PatientsCollectionJson from "nv@json/patients/patients.collection.json";
import ProtocolsCollection    from "nv@json/patients/protocols.collection.json";
import PatientsResults        from "nv@json/patients/patients-results.collection.json";

function containsAny(arr1: any, arr2: any) {
  return arr1.some((item: any) => arr2.includes(item));
}

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  private $patientCollection: any = [];
  private $protocolCollection: any = [];
  private $resultCollection: any = [];

  public $patient() {

    this.$patientCollection = structuredClone(PatientsCollectionJson);
    return this;
  }

  public getAll(): any {
    return this.$patientCollection;
  }

  public $protocols() {

    this.$protocolCollection = structuredClone(ProtocolsCollection);
    return this;
  }

  public getAllprotocols(): any {
    return this.$protocolCollection;
  }

  public $results() {

    this.$resultCollection = structuredClone(PatientsResults);
    return this;
  }

  public getAllresults(): any {
    return this.$resultCollection;
  }


  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByOwnerName(ownerName: any) {


    if(!ownerName) return this;

    this.$patientCollection = this.$patientCollection.filter((element: any) => {
      return (element.owner_name).toLowerCase().includes(ownerName.toLowerCase()) ||
             (element.owner_name).toLowerCase().includes(ownerName.toLowerCase());
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByDiagnosis(diagnosis: any) {

    if(!diagnosis) return this;

    this.$protocolCollection = structuredClone(ProtocolsCollection);

    // find all protocol ids related to some patient
    const idCollection = this.$protocolCollection.filter((element: any) => {
      return (element.diagnosis).toLowerCase().includes(diagnosis.toLowerCase()) ||
             (element.diagnosis).toLowerCase().includes(diagnosis.toLowerCase());
    });

    const protocolIdCollection = [];
    for(let i = 0; i < idCollection.length; i++) {
      protocolIdCollection.push(idCollection[i].protocol_number);
    }

    // console.log(protocolIdCollection);

    const r = [];
    for(let i = 0; i < this.$patientCollection.length; i++) {

      // console.log("@@@")
      // console.log(this.$patientCollection[i]);
      // console.log("@@@")

      if(containsAny(this.$patientCollection[i].protocols, protocolIdCollection)) {
        r.push(structuredClone(this.$patientCollection[i]));
      }

      // if(this.$patientCollection[i].protocols.includes(protocolIdCollection)) {
      //   r.push(structuredClone(this.$patientCollection[i]));
      // }
    }

    this.$patientCollection = r;

    return this;
  }


}
