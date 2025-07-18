import { Component, OnInit, inject  } from '@angular/core';
import { NewbornsService } from 'nv@services/newborns.service';

@Component({
  selector    : 'page-newborns',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: NewbornsService   = inject(NewbornsService);
  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    this.$data           = this.$dataService.get(serviceId);
  }
}
