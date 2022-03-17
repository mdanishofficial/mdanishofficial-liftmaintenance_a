import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayinstallationPage } from './todayinstallation.page';

const routes: Routes = [
  {
    path: '',
    component: TodayinstallationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayinstallationPageRoutingModule {}
