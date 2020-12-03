import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatingPagePage } from './chating-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChatingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatingPagePageRoutingModule {}
