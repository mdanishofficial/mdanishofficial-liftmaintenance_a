import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallationdetailsPageRoutingModule } from './installationdetails-routing.module';

import { InstallationdetailsPage } from './installationdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallationdetailsPageRoutingModule
  ],
  declarations: [InstallationdetailsPage]
})
export class InstallationdetailsPageModule {}
