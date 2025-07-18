import { IonicModule              } from '@ionic/angular';
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';

import { TestPage                 } from './test.page';

import { SelectCategoryModal      } from './@modal/select-category/select-category.component';

import { PrimaryMenu              } from 'nv@features/@menu/primary-menu/primary-menu.component';

import { NvRadioComponent         } from 'nv@components/@forms/nv-radio/nv-radio.component';
import { DrugCard                 } from 'nv@components/@blocks/drug-card/drug-card.component';
import { NvSearchToolbarComponent } from 'nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component';
import { DosePipe                 } from 'nv@pipes/doce.pipe';
import { CategoryPickerComponent  } from 'nv@components/@blocks/category-picker/category-picker.component';
import { NvInfoModal              } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';
import { SplitPipe                } from 'nv@pipes/split.pipe';
import { NvLinkButtonComponent    } from 'nv@components/@forms/nv-link-button/nv-link-button.component';
import { DetailModal              } from './@modal/detail/detail.component';
import { NgOptimizedImage         } from '@angular/common'
import { NvSectionContentView     } from 'nv@components/@layouts/nv-section-content-view/nv-section-content-view.component';

const routes: Routes = [{
    path      : '',
    component : TestPage,
  }
];

@NgModule({
    declarations                    : [
      TestPage                      ,
      SelectCategoryModal,
      DetailModal
    ],
    imports                         : [
      NgOptimizedImage              ,
      RouterModule.forChild(routes) ,
      IonicModule                   ,
      CommonModule                  ,
      FormsModule                   ,
      DosePipe                      ,
      SplitPipe                     ,
      PrimaryMenu                   ,
      NvRadioComponent              ,
      DrugCard                      ,
      NvSearchToolbarComponent      ,
      CategoryPickerComponent       ,
      NvInfoModal                   ,
      NvLinkButtonComponent         ,
      NvSectionContentView
    ]
})
export class TestPageModule {}
