import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';
import { Component              } from '@angular/core';

import { PatientBar             } from 'nv@components/@blocks/patient-bar/patient-bar.component';
import { PrimaryMenu            } from 'nv@features/@menu/primary-menu/primary-menu.component';

@Component({
  selector    : 'app-tabs',
  templateUrl : 'tabs.page.html'
})
export class TabsPage { }


const routes: Routes = [
  {
    path      : '',
    component : TabsPage,
    children  : [
      {
        path          : 'tab1',
        loadChildren  : () => import('../patients/patients.module').then(m => m.PatientsPageModule)
      },
      // {
      //   path          : 'tab2',
      //   loadChildren  : () => import('../diseases/diseases.module').then(m => m.DiseasesPageModule)
      // },
      {
        path          : '',
        redirectTo    : 'tab1',
        pathMatch     : 'full'
      }
    ]
  }
];

@NgModule({
  declarations                    : [
    TabsPage
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    PatientBar          ,
    PrimaryMenu
  ]
})
export class TabsPageModule {}
