import { Component, inject    } from '@angular/core';


@Component({
  selector    : 'page-vaccination-plan',
  templateUrl : 'vaccination-plan.page.html',
  styleUrl    : 'vaccination-plan.page.scss'
})
export class VaccinationPlanPage {


  public calculateWeeksAfterDate(startDate: any, weeks: any) {

    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const targetDate = new Date(startDate.getTime() + weeks * oneWeekInMilliseconds);
    return targetDate;
}

public onOpenPdfDocument(url: string) {
  window.open(`${url}`, '_blank')?.focus();
  console.log(`link: ${url}`)
}

}
