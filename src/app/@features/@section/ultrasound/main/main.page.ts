import { Component, OnInit, inject  } from '@angular/core';
import { UltrasoundService } from 'nv@services/ultrasound.service';

@Component({
  selector    : 'page-ultrasound',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: UltrasoundService   = inject(UltrasoundService);
  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    this.$data           = this.$dataService.get(serviceId);
  }
}
