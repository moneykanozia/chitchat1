import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChattingPagePage } from './chatting-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChattingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChattingPagePageRoutingModule {}
