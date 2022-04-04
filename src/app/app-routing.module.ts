import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'totalinstallation',
    loadChildren: () => import('./totalinstallation/totalinstallation.module').then(m => m.TotalinstallationPageModule)
  },
  {
    path: 'todayinstallation',
    loadChildren: () => import('./todayinstallation/todayinstallation.module').then( m => m.TodayinstallationPageModule)
  },
  {
    path: 'installationdetails',
    loadChildren: () => import('./installationdetails/installationdetails.module').then( m => m.InstallationdetailsPageModule)
  },
  {
    path: 'assignedinstallation',
    loadChildren: () => import('./assignedinstallation/assignedinstallation.module').then( m => m.AssignedinstallationPageModule)
  },

  {
    path: 'billdetails/:id',
    loadChildren: () => import('./billdetails/billdetails.module').then( m => m.BilldetailsPageModule)
  },
  {
    path: 'newmalfunction',
    loadChildren: () => import('./newmalfunction/newmalfunction.module').then( m => m.NewmalfunctionPageModule)
  },
  {
    path: 'completemalfunction',
    loadChildren: () => import('./completemalfunction/completemalfunction.module').then( m => m.CompletemalfunctionPageModule)
  },
  {
    path: 'malfunctiondetails',
    loadChildren: () => import('./malfunctiondetails/malfunctiondetails.module').then( m => m.MalfunctiondetailsPageModule)
  },
  {
    path: 'update-malfunction',
    loadChildren: () => import('./update-malfunction/update-malfunction.module').then( m => m.UpdateMalfunctionPageModule)
  },
  {
    path: 'unpaid-bill',
    loadChildren: () => import('./unpaid-bill/unpaid-bill.module').then( m => m.UnpaidBillPageModule)
  },

  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'paid-bills',
    loadChildren: () => import('./paid-bills/paid-bills.module').then( m => m.PaidBillsPageModule)
  },
  {
    path: 'payment-modal',
    loadChildren: () => import('./payment-modal/payment-modal.module').then( m => m.PaymentModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
