import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaidBillsPageRoutingModule } from './paid-bills-routing.module';

import { PaidBillsPage } from './paid-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidBillsPageRoutingModule
  ],
  declarations: [PaidBillsPage]
})
export class PaidBillsPageModule {}
