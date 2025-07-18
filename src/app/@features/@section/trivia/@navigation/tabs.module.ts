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
        path          : 'teeth',
        loadChildren  : () => import('../main/main.module').then(m => m.FeatureModule)
      },
      {
        path          : 'gender',
        loadChildren  : () => import('../main/main.module').then(m => m.FeatureModule)
      },
      {
        path          : 'indicators',
        loadChildren  : () => import('../main/main.module').then(m => m.FeatureModule)
      },
      {
        path          : 'dispersal',
        loadChildren  : () => import('../main/main.module').then(m => m.FeatureModule)
      },
      {
        path          : '',
        redirectTo    : 'teeth',
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
