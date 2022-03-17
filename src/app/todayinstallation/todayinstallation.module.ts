import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayinstallationPageRoutingModule } from './todayinstallation-routing.module';

import { TodayinstallationPage } from './todayinstallation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayinstallationPageRoutingModule
  ],
  declarations: [TodayinstallationPage]
})
export class TodayinstallationPageModule {}
