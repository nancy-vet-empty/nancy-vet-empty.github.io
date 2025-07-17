import { IonicModule              } from '@ionic/angular';
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';

import { DrugInfoModal            } from './@modal/drug-info/drug-info.component';
import { SelectCategoryModal      } from './@modal/select-category/select-category.component';

import { SymptomTab               } from './symptoms.page';
import { DosePipe                 } from 'nv@pipes/doce.pipe';
import { DrugCard                 } from 'nv@components/@blocks/drug-card/drug-card.component';
import { NvRadioComponent         } from 'nv@components/@forms/nv-radio/nv-radio.component';
import { NvSearchToolbarComponent } from 'nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component';
import { CategoryPickerComponent  } from 'nv@components/@blocks/category-picker/category-picker.component';
import { NvInfoModal              } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';
import { NvLinkButtonComponent    } from 'nv@components/@forms/nv-link-button/nv-link-button.component';

const routes: Routes              = [{
    path                          : '',
    component                     : SymptomTab,
  }
];

@NgModule({
    declarations                    : [
      SymptomTab                    ,
      DrugInfoModal                 ,
      SelectCategoryModal
    ],
    imports                         : [
      RouterModule.forChild(routes) ,
      IonicModule                   ,
      CommonModule                  ,
      FormsModule                   ,
      DosePipe                      ,
      DrugCard                      ,
      NvRadioComponent              ,
      NvSearchToolbarComponent      ,
      CategoryPickerComponent       ,
      NvInfoModal                   ,
      NvLinkButtonComponent         ,
    ]
})
export class SymptomPageModule {}
