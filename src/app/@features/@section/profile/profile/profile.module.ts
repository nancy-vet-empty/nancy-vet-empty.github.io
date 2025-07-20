// profile.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfilePageRoutingModule } from './profile-routing.module'; // ✅ Add this
import { ProfilePage } from './profile.page';

@NgModule({
  declarations: [ProfilePage],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ProfilePageRoutingModule // ✅ Include routing
  ]
})
export class ProfilePageModule {}
