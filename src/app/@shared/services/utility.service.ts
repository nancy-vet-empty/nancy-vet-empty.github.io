import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UtilityDom {

  public toggleClass(classCollection: any, $event: any) {

    classCollection.map((element: any) => {
      element.nativeElement.classList.remove('is-selected');
    });

    $event.target.classList.add('is-selected');
  }


}
