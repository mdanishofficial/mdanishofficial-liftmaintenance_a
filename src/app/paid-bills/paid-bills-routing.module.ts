import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaidBillsPage } from './paid-bills.page';

const routes: Routes = [
  {
    path: '',
    component: PaidBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaidBillsPageRoutingModule {}
