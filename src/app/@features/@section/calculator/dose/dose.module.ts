import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';
import { DosePage               } from './dose.page';

import { PatientPicker          } from 'nv@components/@blocks/patient-picker/patient-picker.component';

import { DrugCard              } from 'nv@components/@blocks/drug-card/drug-card.component';
import { DrugCard2              } from 'nv@components/@blocks/drug-card2/drug-card2.component';
import { PrimaryMenu            } from 'nv@features/@menu/primary-menu/primary-menu.component';

const routes: Routes = [{
    path      : '',
    component : DosePage,
  }
];

@NgModule({
  declarations                    : [
    DosePage
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    PatientPicker                 ,
    PrimaryMenu                   ,
    DrugCard2                     ,
    DrugCard
  ]
})
export class DosePageModule {}
