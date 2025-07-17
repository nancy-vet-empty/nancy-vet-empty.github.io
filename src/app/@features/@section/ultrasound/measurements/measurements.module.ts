import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';

import { MeasurementsComponent     } from './measurements.component';
import { PatientPicker          } from 'nv@components/@blocks/patient-picker/patient-picker.component';
import { DosePicker             } from 'nv@components/@blocks/dose-picker/dose-picker.component';
import { NvInfoModal            } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';

const routes: Routes = [{
    path      : '',
    component : MeasurementsComponent,
  }
];

@NgModule({
  declarations                    : [
    MeasurementsComponent
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
