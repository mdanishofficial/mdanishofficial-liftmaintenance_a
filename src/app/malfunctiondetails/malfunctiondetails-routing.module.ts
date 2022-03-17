import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalfunctiondetailsPage } from './malfunctiondetails.page';

const routes: Routes = [
  {
    path: '',
    component: MalfunctiondetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalfunctiondetailsPageRoutingModule {}
