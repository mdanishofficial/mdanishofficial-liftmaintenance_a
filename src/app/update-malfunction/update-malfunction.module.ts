import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMalfunctionPageRoutingModule } from './update-malfunction-routing.module';

import { UpdateMalfunctionPage } from './update-malfunction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMalfunctionPageRoutingModule
  ],
  declarations: [UpdateMalfunctionPage]
})
export class UpdateMalfunctionPageModule {}
