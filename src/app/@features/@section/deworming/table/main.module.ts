import { IonicModule              } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';

import { MainComponent            } from './main.page';
import { DosePipe                 } from 'nv@pipes/doce.pipe';
import { DrugCard                 } from 'nv@components/@blocks/drug-card/drug-card.component';
import { NvRadioComponent         } from 'nv@components/@forms/nv-radio/nv-radio.component';
import { NvSearchToolbarComponent } from 'nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component';
import { CategoryPickerComponent  } from 'nv@components/@blocks/category-picker/category-picker.component';
import { NvInfoModal              } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';
import { NvLinkButtonComponent    } from 'nv@components/@forms/nv-link-button/nv-link-button.component';
import { DrugCardDeworming        } from 'nv@components/@blocks/drug-card-deworming/drug-card-deworming.component';

import { SplitPipe                } from 'nv@pipes/split.pipe';
import { PrimaryMenu              } from 'nv@features/@menu/primary-menu/primary-menu.component';

const routes: Routes              = [{
    path                          : '',
    component                     : MainComponent,
  }
];

@NgModule({
  schemas                           : [
    CUSTOM_ELEMENTS_SCHEMA
  ],

    declarations                    : [
      MainComponent
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

      DrugCard                      ,
      DrugCardDeworming             ,
      NvRadioComponent              ,
      NvSearchToolbarComponent      ,
      CategoryPickerComponent       ,
      NvInfoModal                   ,
      NvLinkButtonComponent         ,
    ]
})
export class TablePageModule {}
