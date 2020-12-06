import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { UserProfilePage } from './user-profile.page';
import { SharedModule } from '../shared/shared.module';
import { ShowErrorComponent } from '../shared/show-error/show-error.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UserProfilePageRoutingModule,
    SharedModule
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
