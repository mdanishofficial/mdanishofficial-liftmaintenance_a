import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnpaidBillPage } from './unpaid-bill.page';

const routes: Routes = [
  {
    path: '',
    component: UnpaidBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnpaidBillPageRoutingModule {}
