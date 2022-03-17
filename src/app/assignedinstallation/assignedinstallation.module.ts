import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignedinstallationPageRoutingModule } from './assignedinstallation-routing.module';

import { AssignedinstallationPage } from './assignedinstallation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignedinstallationPageRoutingModule
  ],
  declarations: [AssignedinstallationPage]
})
export class AssignedinstallationPageModule {}
