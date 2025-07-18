import { NgModule             } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule         } from "@angular/common";
import { FormsModule          } from "@angular/forms";
import { IonicModule          } from "@ionic/angular";
import { SplashComponent      } from "./splash.component";

const routes: Routes = [{
    path      : '',
    component : SplashComponent
  }
];

@NgModule({
  declarations                    : [
    SplashComponent
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    CommonModule                  ,
    FormsModule                   ,
    IonicModule                   ,
  ]
})
export class SplashModule {}
