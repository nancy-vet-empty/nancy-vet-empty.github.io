import { Component, OnInit, inject  } from '@angular/core';
import { BloodCompositionService } from 'nv@services/blood-composition.service';

@Component({
  selector    : 'page-trivia',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: BloodCompositionService   = inject(BloodCompositionService);
  public $data: any;

  public ngOnInit(): void {
    this.$data = this.$dataService.get('blood-composition');
  }
}
