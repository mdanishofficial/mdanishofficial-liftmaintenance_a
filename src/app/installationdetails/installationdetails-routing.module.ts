import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationdetailsPage } from './installationdetails.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationdetailsPageRoutingModule {}
