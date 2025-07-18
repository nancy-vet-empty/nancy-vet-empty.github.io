import { Component, NgModule    } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';
import { IonicModule            } from '@ionic/angular';

import { DrugCard               } from 'nv@components/@blocks/drug-card/drug-card.component';
import { PrimaryMenu            } from 'nv@features/@menu/primary-menu/primary-menu.component';

@Component({
  selector    : 'calculator-navigation',
  templateUrl : 'tabs.page.html'
})
export class TabNavigation {}

const routes: Routes = [
  {
    path      : '',
    component : TabNavigation,
    children  : [
      {
        path          : 'fluid',
        loadChildren  : () => import('../fluid/fluid.module').then(m => m.FluidPageModule)
      },
      {
        path          : 'analysis',
        loadChildren  : () => import('../analysis/analysis.module').then(m => m.AnalysisPageModule)
      },
      {
        path          : 'dose',
        loadChildren  : () => import('../dose/dose.module').then(m => m.DosePageModule)
      },
      {
        path          : 'poison/:id',
        loadChildren  : () => import('../poison/poison.module').then(m => m.PoisonPageModule)
      },
      {
        path          : 'infusion-pain',
        loadChildren  : () => import('../infusion-pain/infusion-pain.module').then(m => m.InfusionPainPageModule)
      },
      {
        path          : 'ceftriaxone-dilution',
        loadChildren  : () => import('../ceftriaxone-dilution/ceftriaxone-dilution.module').then(m => m.CeftriaxoneDilutionModule)
      },
      {
        path          : 'solution-dilution',
        loadChildren  : () => import('../solution-dilution/solution-dilution.module').then(m => m.SolutionDilutionModule)
      },
      {
        path          : 'mixing-solutions',
        loadChildren  : () => import('../mixing-solutions/mixing-solutions.module').then(m => m.MixingSolutionsModule)
      },
      {
        path          : 'seizure-infusion',
        loadChildren  : () => import('../seizure-infusion/seizure-infusion.module').then(m => m.SeizureInfusionModule)
      },
      {
        path: '',
        redirectTo    : 'tab1',
        pathMatch     : 'full'
      }
    ]
  }
];

@NgModule({
  declarations                    : [
    TabNavigation
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
