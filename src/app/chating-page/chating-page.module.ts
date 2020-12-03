import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatingPagePageRoutingModule } from './chating-page-routing.module';

import { ChatingPagePage } from './chating-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatingPagePageRoutingModule
  ],
  declarations: [ChatingPagePage]
})
export class ChatingPagePageModule {}
