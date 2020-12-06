import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import { UserProfilePage } from './user-profile.page';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AngularFirestoreModule,AngularFireAuthModule],
  exports: [RouterModule],
  providers:[AngularFireStorage]
})
export class UserProfilePageRoutingModule {}
