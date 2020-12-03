import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChattingPagePageRoutingModule } from './chatting-page-routing.module';

import { ChattingPagePage } from './chatting-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChattingPagePageRoutingModule
  ],
  declarations: [ChattingPagePage]
})
export class ChattingPagePageModule {}
