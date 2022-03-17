import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalinstallationPageRoutingModule } from './totalinstallation-routing.module';

import { TotalinstallationPage } from './totalinstallation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalinstallationPageRoutingModule
  ],
  declarations: [TotalinstallationPage]
})
export class TotalinstallationPageModule {}
