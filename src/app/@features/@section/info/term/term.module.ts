import { IonicModule              } from '@ionic/angular';
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';


import { TermPage                 } from './term.page';
import { TermDetailModal          } from './@modal/term-detail/term-detail.component';
import { SelectCategoryModal      } from './@modal/select-category/select-category.component';
import { CategoryPickerComponent  } from 'nv@components/@blocks/category-picker/category-picker.component';
import { NvSearchToolbarComponent } from 'nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component';
import { NvInfoModal              } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';

const routes: Routes = [{
    path      : '',
    component : TermPage,
}];

@NgModule({
  declarations                    : [
    TermPage                      ,
    TermDetailModal               ,
    SelectCategoryModal           ,
    SelectCategoryModal           ,
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    CategoryPickerComponent       ,
    NvSearchToolbarComponent,
    NvInfoModal
  ],
})
export class TermPageModule {}
