import { Component, OnInit, inject  } from '@angular/core';
import { BloodSmearService } from 'nv@services/blood-smear.service';

@Component({
  selector    : 'page-blood-smear',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: BloodSmearService   = inject(BloodSmearService);
  public $data: any;

  public ngOnInit(): void {
    this.$data = this.$dataService.get('blood-smear-method');
  }
}
