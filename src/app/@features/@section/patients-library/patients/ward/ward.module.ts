import { CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { IonicModule              } from '@ionic/angular';
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';

import { PrimaryMenu              } from 'nv@features/@menu/primary-menu/primary-menu.component';

import { NvRadioComponent         } from 'nv@components/@forms/nv-radio/nv-radio.component';
import { PatientBar               } from 'nv@components/@blocks/patient-bar/patient-bar.component';
import { NvSearchToolbarComponent } from 'nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component';
import { DosePipe                 } from 'nv@pipes/doce.pipe';
import { CategoryPickerComponent  } from 'nv@components/@blocks/category-picker/category-picker.component';
import { NvInfoModal              } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';
import { SplitPipe                } from 'nv@pipes/split.pipe';
import { NvLinkButtonComponent    } from 'nv@components/@forms/nv-link-button/nv-link-button.component';
import { WardPage                 } from './ward.page';


const routes: Routes = [{
    path      : '',
    component : WardPage,
  }
];

@NgModule({
    schemas                         : [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations                    : [
      WardPage
    ],
    imports                         : [
      RouterModule.forChild(routes) ,
      IonicModule                   ,
      CommonModule                  ,
      FormsModule                   ,
      DosePipe                      ,
      SplitPipe                     ,
      PrimaryMenu                   ,
      NvRadioComponent              ,
      PatientBar                    ,
      NvSearchToolbarComponent      ,
      CategoryPickerComponent       ,
      NvInfoModal                   ,
      NvLinkButtonComponent
    ]
})
export class WardPageModule {}
