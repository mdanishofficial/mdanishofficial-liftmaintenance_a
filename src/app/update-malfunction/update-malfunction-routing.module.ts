import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMalfunctionPage } from './update-malfunction.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMalfunctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMalfunctionPageRoutingModule {}
