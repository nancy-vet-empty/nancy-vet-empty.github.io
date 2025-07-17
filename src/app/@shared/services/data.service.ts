import { Injectable } from "@angular/core";
import DrugCollectionJson from "nv@json/medication.collection.json";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private $intermediateCollection: any = [];

  public $medicine() {

    this.$intermediateCollection = structuredClone(DrugCollectionJson);
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

    this.$intermediateCollection = DrugCollectionJson.filter((element) => {
      return categoryCollection.some((o: any) => (element.type).toLowerCase().includes(o.toLowerCase()));
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
      return (element.title).toLowerCase().includes(title.toLowerCase()) ||
             (element.titleEn).toLowerCase().includes(title.toLowerCase());

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
   * @returns
   */
  public getAllCategories($preset = 'default') {

    if($preset == 'term') return [
      { category: 'blood'           , title: 'ППК'              , imgPath: `/assets/icon/blood.png`             },
      { category: 'coagulant'       , title: 'коагуланти'       , imgPath: `/assets/icon/coagulant.png`         },
      { category: 'urogenital'      , title: 'бъбреци'          , imgPath: `/assets/icon/urogenital.png`        },
      { category: 'liver'           , title: 'черен дроб'       , imgPath: `/assets/icon/liver.png`             },
      { category: 'others'          , title: 'други'            , imgPath: `/assets/icon/others.png`            }
    ];

    if($preset == 'diseases') {

      return [
        { category: 'infectious'      , title: `Инфекциозни заболявания`,  imgPath: `/assets/pdfs/@diseases/icons/1-infectious.png`},
        { category: 'parasitic'       , title: `Паразитни заболявания`,  imgPath: `/assets/pdfs/@diseases/icons/2-parasitic.png`},
        { category: 'neoplasms'       , title: `Новообразувания`,  imgPath: `/assets/pdfs/@diseases/icons/3-neoplasms.png`},
        { category: 'blood'           , title: `Болести на кръвта и имунната система`,  imgPath: `/assets/pdfs/@diseases/icons/4-blood.png`},
        { category: 'nervous'         , title: `Болести на нервната система`,  imgPath: `/assets/pdfs/@diseases/icons/5-nervous.png`},
        { category: 'eye'             , title: `Болести на окото`,  imgPath: `/assets/pdfs/@diseases/icons/6-eye.png`},
        { category: 'ear'             , title: `Болести на ухото`,  imgPath: `/assets/pdfs/@diseases/icons/7-ear.png`},
        { category: 'mental'          , title: `Поведенчески разстройства`,  imgPath: `/assets/pdfs/@diseases/icons/8-mental.png`},
        { category: 'endocrine'       , title: `Болести на ендокринната система`,  imgPath: `/assets/pdfs/@diseases/icons/9-endocrine.png`},
        { category: 'circulatory'     , title: `Болести на кръвообращението`,  imgPath: `/assets/pdfs/@diseases/icons/10-circulatory.png`},
        { category: 'respiratory'     , title: `Болести на дихателната система`,  imgPath: `/assets/pdfs/@diseases/icons/11-respiratory.png`},
        { category: 'digestive'       , title: `Болести на храносмилателната система`,  imgPath: `/assets/pdfs/@diseases/icons/12-digestive.png`},
        { category: 'skin'            , title: `Болести на кожата`,  imgPath: `/assets/pdfs/@diseases/icons/13-skin.png`},
        { category: 'muskuloskeletal' , title: `Болести на костно-мускулната система`,  imgPath: `/assets/pdfs/@diseases/icons/14-muskuloskeletal.png`},
        { category: 'genitourinary'   , title: `Болести на пикочо-половата система`,  imgPath: `/assets/pdfs/@diseases/icons/15-genitourinary.png`},
        { category: 'pregnancy'       , title: `Бременност и раждане`,  imgPath: `/assets/pdfs/@diseases/icons/16-pregnancy.png`},
        { category: 'congenital'      , title: `Вродени аномалии`,  imgPath: `/assets/pdfs/@diseases/icons/17-congenital.png`},
        { category: 'injuries'        , title: `Травми и отравяния`,  imgPath: `/assets/pdfs/@diseases/icons/18-injuries.png`}
      ];
    }

    if($preset == 'animals') return [
      { category: 'dogs'              , title: 'кучета'         , imgPath: `/assets/icon/picker/dog.png`         },
      { category: 'cats'              , title: 'котки'          , imgPath: `/assets/icon/picker/cat.png`         }
    ];

    if($preset == 'breed') return [
      { category: 'Sheepdogs and Cattledogs'              , title: 'Овчарски и пастирски кучета', imgPath: `/assets/icon/breed/1.png`},
      { category: 'Pinscher and Schnauzer'                , title: 'Пинчери и шнауцери', imgPath: `/assets/icon/breed/2.png`},
      { category: 'Terriers'                              , title: 'Териери', imgPath: `/assets/icon/breed/3.png`},
      { category: 'Dachshunds'                            , title: 'Дакели', imgPath: `/assets/icon/breed/4.png`},
      { category: 'Spitz and primitive types'             , title: 'Шпицове и примитивен тип', imgPath: `/assets/icon/breed/5.png`},
      { category: 'Scent hounds and related breeds'       , title: 'Гончета и подобни', imgPath: `/assets/icon/breed/6.png`},
      { category: 'Pointing Dogs'                         , title: 'Пойнтери', imgPath: `/assets/icon/breed/7.png`},
      { category: 'Retrievers, Flushing Dogs, Water Dogs' , title: 'Апортиращи, претърсващи и работещи във вода кучета', imgPath: `/assets/icon/breed/8.png`},
      { category: 'Companion and Toy Dogs'                , title: 'Кучета компаньони и "той" кучета', imgPath: `/assets/icon/breed/9.png`},
      { category: 'Sighthounds'                           , title: 'Хрътки', imgPath: `/assets/icon/breed/10.png`}
    ];

      return [
        { category: 'respiratory'       , title: 'дихателна'            , imgPath: `/assets/icon/respiratory.png`       },
        { category: 'gastrointestinal'  , title: 'храносмилателна'      , imgPath: `/assets/icon/gastrointestinal.png`  },
        { category: 'cardiovascular'    , title: 'сърдечно-съдова'      , imgPath: `/assets/icon/cardiovascular.png`    },
        { category: 'urogenital'        , title: 'пикочна'              , imgPath: `/assets/icon/urogenital.png`        },
        { category: 'nervous'           , title: 'нервна'               , imgPath: `/assets/icon/nervous.png`           },
        { category: 'eyes'              , title: 'очи'                  , imgPath: `/assets/icon/eyes.png`              },
        { category: 'ears'              , title: 'уши'                  , imgPath: `/assets/icon/ears.png`              },
        { category: 'skin'              , title: 'дерматологични'       , imgPath: `/assets/icon/skin.png`              },
        { category: 'antibiotics'       , title: 'антибиотици'          , imgPath: `/assets/icon/antibiotics.png`       },
        { category: 'antiparasitic'     , title: 'антипаразитни'        , imgPath: `/assets/icon/antiparasitic.png`     },
        { category: 'endocrine'         , title: 'ендокринни'           , imgPath: `/assets/icon/chemotherapeutics.png` },
        { category: 'antiinflammatory'  , title: 'противовъзпалителни'  , imgPath: `/assets/icon/antiinflammatory.png`  },
        { category: 'others'            , title: 'други'                , imgPath: `/assets/icon/others.png`            }
      ];
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
    for(let index = 0; index < DrugCollectionJson.length; index++ ) {

      const element = DrugCollectionJson[index];
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
    return this.$intermediateCollection;
  }
}
