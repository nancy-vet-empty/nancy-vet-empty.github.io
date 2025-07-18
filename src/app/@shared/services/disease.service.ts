import { Injectable }           from "@angular/core";
import BloodDataJson            from "nv@json/diseases/diseases-blood.collection.json";
import CirculatoryDataJson      from "nv@json/diseases/diseases-circulatory.collection.json";
import CongenitalDataJson       from "nv@json/diseases/diseases-congenital.collection.json";
import DigestiveDataJson        from "nv@json/diseases/diseases-digestive.collection.json";
import EarDataJson              from "nv@json/diseases/diseases-ear.collection.json";
import EndocrineDataJson        from "nv@json/diseases/diseases-endocrine.collection.json";
import EyeDataJson              from "nv@json/diseases/diseases-eye.collection.json";
import GenitourinaryDataJson    from "nv@json/diseases/diseases-genitourinary.collection.json";
import InfectiousDataJson       from "nv@json/diseases/diseases-infectious.collection.json";
import InjuriesDataJson         from "nv@json/diseases/diseases-injuries.collection.json";
import MentalDataJson           from "nv@json/diseases/diseases-mental.collection.json";
import MuskuloskeletalDataJson  from "nv@json/diseases/diseases-muskuloskeletal.collection.json";
import NeoplasmsDataJson        from "nv@json/diseases/diseases-neoplasms.collection.json";
import NervousDataJson          from "nv@json/diseases/diseases-nervous.collection.json";
import ParasiticDataJson        from "nv@json/diseases/diseases-parasitic.collection.json";
import PregnancyDataJson        from "nv@json/diseases/diseases-pregnancy.collection.json";
import RespiratoryDataJson      from "nv@json/diseases/diseases-respiratory.collection.json";
import SkinDataJson             from "nv@json/diseases/diseases-skin.collection.json";

@Injectable({
  providedIn: "root"
})
export class DiseasesService {

  private DataJson: any = [];

  private $intermediateCollection: any = [];

  public constructor() {

    const b: any  = []
    this.DataJson = b.concat(InfectiousDataJson, ParasiticDataJson, NeoplasmsDataJson, BloodDataJson, NervousDataJson, EyeDataJson, EarDataJson, MentalDataJson, EndocrineDataJson, CirculatoryDataJson, RespiratoryDataJson, DigestiveDataJson, SkinDataJson, MuskuloskeletalDataJson, GenitourinaryDataJson, PregnancyDataJson, CongenitalDataJson, InjuriesDataJson);

    this.$intermediateCollection = structuredClone(this.DataJson);
  }

  public select() {

    const b: any  = []
    this.DataJson = b.concat(InfectiousDataJson, ParasiticDataJson, NeoplasmsDataJson, BloodDataJson, NervousDataJson, EyeDataJson, EarDataJson, MentalDataJson, EndocrineDataJson, CirculatoryDataJson, RespiratoryDataJson, DigestiveDataJson, SkinDataJson, MuskuloskeletalDataJson, GenitourinaryDataJson, PregnancyDataJson, CongenitalDataJson, InjuriesDataJson);

    this.$intermediateCollection = structuredClone(this.DataJson);
    return this;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public getAll(): any {
    return this.$intermediateCollection;
  }

  /**
   * @author Mihail Petrov
   * @param categoryElement
   * @returns
   */
  public filterByCategory(categoryElement: any) {

    if(categoryElement.length == 0) {
      return this;
    }

    const categoryCollection = categoryElement.map((element: any) => {
      return element.category;
    });

    this.$intermediateCollection = this.DataJson.filter((element: any) => {
      return categoryCollection.some((o: any) => (element.type).toLowerCase().includes(o.toLowerCase()));
    });

    return this;
  }

    /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  /** Филтриране на заболявания: Пета функция */
  public filterByAnimalType(categoryElement: any) {

    if (categoryElement.length === 0) {
      return this;
    }

    const categoryCollection = categoryElement.map((element: any) => {
      return element.category;
    });

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return categoryCollection.some((o: any) => element.animals.includes(o));
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByTitle(title: any) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return (element.title).toLowerCase().includes(title.toLowerCase());
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param title
   * @returns
   */
  public filterByPrimary(id: string, title: string) {

    if(!title) return this;

    this.$intermediateCollection = this.$intermediateCollection.filter((element: any) => {
      return ((element[id]).toLowerCase()).includes(title.toLowerCase());
    });

    return this;
  }

  /**
   * @author Mihail Petrov
   * @param value
   * @param withAproximation
   */
  public getById(value: string, withAproximation = false): any {

    if(!value || value.length == 0) {
      return [];
    }

    const resultCollection = [];
    for(let index = 0; index < this.DataJson.length; index++ ) {

      const element = this.DataJson[index];
      const title   = element.title.toLowerCase();

      if(title.includes(value.toLowerCase())) {
        resultCollection.push(element);
      }
    }

    return resultCollection;
  }

  /**
   * @author Mihail Petrov
   * @returns
   */
  public get() {
    return this.$intermediateCollection.filter((e: any) => e.isVisible == true);
  }
}
