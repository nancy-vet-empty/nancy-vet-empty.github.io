import { Component, OnInit, inject  } from '@angular/core';
import { TriviaService } from 'nv@services/trivia.service';

@Component({
  selector    : 'page-trivia',
  templateUrl : './main.page.html',
  styleUrl    : './main.page.scss'
})
export class MainPage implements OnInit {

  private $dataService: TriviaService   = inject(TriviaService);
  public $data: any;

  public ngOnInit(): void {

    const pathCollection = window.location.pathname.split('/');
    const serviceId      = pathCollection[pathCollection.length - 1];
    this.$data           = this.$dataService.get(serviceId);
  }
}
