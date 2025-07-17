import { IonicModule            } from '@ionic/angular';
import { NgModule               } from '@angular/core';
import { CommonModule           } from '@angular/common';
import { FormsModule            } from '@angular/forms';
import { RouterModule, Routes   } from '@angular/router';

import { ReticulocyteCount       } from './reticulocyte-count.page';

import { PatientPicker  } from 'nv@components/@blocks/patient-picker/patient-picker.component';

import { DrugCard2      } from 'nv@components/@blocks/drug-card2/drug-card2.component';
import { PrimaryMenu    } from 'nv@features/@menu/primary-menu/primary-menu.component';
import { DosePicker     } from 'nv@components/@blocks/dose-picker/dose-picker.component';
import { NvInfoModal    } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';

const routes: Routes = [{
    path      : '',
    component : ReticulocyteCount,
  }
];

@NgModule({
  declarations                    : [
    ReticulocyteCount
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    PatientPicker                 ,
    PrimaryMenu                   ,
    DrugCard2                     ,
    DosePicker                    ,
    NvInfoModal
  ]
})
export class ReticulocyteCountModule {}
