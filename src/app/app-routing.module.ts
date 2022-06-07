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
    path: 'malfunctiondetails/:id',
    loadChildren: () => import('./malfunctiondetails/malfunctiondetails.module').then( m => m.MalfunctiondetailsPageModule)
  },
  {
    path: 'update-malfunction',
    loadChildren: () => import('./update-malfunction/update-malfunction.module').then( m => m.UpdateMalfunctionPageModule)
  },
  {
    path: 'unpaid-bill/:refresh',
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
  {
    path: 'task-details/:id',
    loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./languages/languages.module').then( m => m.LanguagesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
