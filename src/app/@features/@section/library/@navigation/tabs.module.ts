import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';
import { Component              } from '@angular/core';

import { DrugCard               } from 'nv@components/@blocks/drug-card/drug-card.component';
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
        loadChildren  : () => import('../medications/medications.module').then(m => m.MedicationsPageModule)
      },
      {
        path          : 'tab2',
        loadChildren  : () => import('../symptoms/symptoms.module').then(m => m.SymptomPageModule)
      },
      {
        path          : 'tab3',
        loadChildren  : () => import('../diseases/diseases.module').then(m => m.DiseasesPageModule)
      },
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
    DrugCard                      ,
    PrimaryMenu
  ]
})
export class TabsPageModule {}
