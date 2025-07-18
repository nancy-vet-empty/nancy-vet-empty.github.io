import { Component, OnInit, inject    } from '@angular/core';

@Component({
  selector    : 'page-vaccination-rabies',
  templateUrl : 'vaccination-rabies.page.html',
  styleUrl    : 'vaccination-rabies.page.scss'
})
export class VaccinationRabiesPage implements OnInit {

  public currentDate: any;
  public validationDate: any;
  public travellingDate: any;

  public ngOnInit(): void {

    const date = new Date();

    this.currentDate = date.toLocaleDateString('bg-BG');

    const validationDateObj = new Date(date);
    validationDateObj.setDate(date.getDate() + 21);

    this.validationDate = validationDateObj.toLocaleDateString('bg-BG');



    const travellingDateObj = new Date(date);
    travellingDateObj.setDate(date.getDate() - 21);

    this.travellingDate = travellingDateObj.toLocaleDateString('bg-BG');
  }

  public processTravelingDate(a: any) {

    const rrr = new Date(a.detail.value);

    const validationDateObj = new Date(a.detail.value);
    validationDateObj.setDate(rrr.getDate() - 21);

    this.travellingDate = validationDateObj.toLocaleDateString('bg-BG');
  }
}
