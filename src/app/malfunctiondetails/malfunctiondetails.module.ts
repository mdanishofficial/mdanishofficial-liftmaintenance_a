import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalfunctiondetailsPageRoutingModule } from './malfunctiondetails-routing.module';

import { MalfunctiondetailsPage } from './malfunctiondetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalfunctiondetailsPageRoutingModule
  ],
  declarations: [MalfunctiondetailsPage]
})
export class MalfunctiondetailsPageModule {}
