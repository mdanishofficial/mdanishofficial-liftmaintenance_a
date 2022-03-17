import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnpaidBillPageRoutingModule } from './unpaid-bill-routing.module';

import { UnpaidBillPage } from './unpaid-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnpaidBillPageRoutingModule
  ],
  declarations: [UnpaidBillPage]
})
export class UnpaidBillPageModule {}
