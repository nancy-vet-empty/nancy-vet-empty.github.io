import { IonicModule              } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';

import { DrugInfoModal            } from './@modal/drug-info/drug-info.component';
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
import { DiseasesPage             } from './diseases.page';
import { DrugCardDiseases         } from 'nv@components/@blocks/drug-card-diseases/drug-card-diseases.component';
import { GalleryModal             } from './@modal/gallery/gallery.component';

const routes: Routes = [{
    path      : '',
    component : DiseasesPage,
  }
];

@NgModule({
  schemas                           : [
    CUSTOM_ELEMENTS_SCHEMA
  ],


    declarations                    : [
      DiseasesPage                  ,
      DrugInfoModal                 ,
      SelectCategoryModal           ,
      GalleryModal
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
      DrugCardDiseases              ,
      NvSearchToolbarComponent      ,
      CategoryPickerComponent       ,
      NvInfoModal                   ,
      NvLinkButtonComponent
    ]
})
export class DiseasesPageModule {}
