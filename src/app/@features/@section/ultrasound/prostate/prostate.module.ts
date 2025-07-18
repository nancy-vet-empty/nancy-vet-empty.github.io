import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';

import { ProstateComponent      } from './prostate.component';
import { PatientPicker          } from 'nv@components/@blocks/patient-picker/patient-picker.component';
import { DosePicker             } from 'nv@components/@blocks/dose-picker/dose-picker.component';
import { NvInfoModal            } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';
import { ResultModal            } from './@modal/result-modal/result-modal.component';

const routes: Routes = [{
    path      : '',
    component : ProstateComponent,
  }
];

@NgModule({
  declarations                    : [
    ProstateComponent,
    ResultModal
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    PatientPicker                 ,
    DosePicker                    ,
    NvInfoModal                   ,
  ]
})
export class FeatureModule {}
