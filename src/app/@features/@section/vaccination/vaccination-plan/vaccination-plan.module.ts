import { IonicModule              } from '@ionic/angular';
import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { FormsModule              } from '@angular/forms';
import { RouterModule, Routes     } from '@angular/router';


import { VaccinationPlanPage      } from './vaccination-plan.page';
import { CategoryPickerComponent  } from 'nv@components/@blocks/category-picker/category-picker.component';
import { NvSearchToolbarComponent } from 'nv@components/@layouts/nv-search-toolbar/nv-search-toolbar.component';
import { NvInfoModal              } from 'nv@components/@layouts/nv-info-modal/nv-info-modal.component';
import { NvLinkButtonComponent    } from 'nv@components/@forms/nv-link-button/nv-link-button.component';

const routes: Routes = [{
    path      : '',
    component : VaccinationPlanPage,
}];

@NgModule({
  declarations                    : [
    VaccinationPlanPage
  ],
  imports                         : [
    RouterModule.forChild(routes) ,
    IonicModule                   ,
    CommonModule                  ,
    FormsModule                   ,
    CategoryPickerComponent       ,
    NvSearchToolbarComponent      ,
    NvInfoModal                   ,
    NvLinkButtonComponent
  ],
})
export class VaccinationPlanPageModule {}
