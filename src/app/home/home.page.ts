/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,) {}

  home(){
    this.router.navigateByUrl('home');
  }
  profile(){
    this.router.navigateByUrl('profile');
  
  }
  settings(){
    this.router.navigateByUrl('settings');
  }
  language(){
    this.router.navigateByUrl('languages');
  }
  faq(){
    this.router.navigateByUrl('faq');
  }
  notifications(){
    this.router.navigateByUrl('notifications');
  }


  totalinstallation() {
    console.log('inside Installation');
  this.router.navigateByUrl('totalinstallation');
  }

  todayinstallation() {
    console.log('inside Installation');
    this.router.navigateByUrl('todayinstallation');
  }

  installationDetail() {
    console.log('inside Installation');
    this.router.navigateByUrl('installationdetails');
  }
  assignedInstallation() {
    console.log('inside Installation');
    this.router.navigateByUrl('assignedinstallation');
  }

  malfunctions() {
    console.log('inside Installation');
    this.router.navigateByUrl('newmalfunction');
  }

  bills() {
    console.log('inside Installation');
    const refresh=true;
    this.router.navigateByUrl('unpaid-bill/' + refresh);
  }

  installation_data = [
    { Installation_id:'01',
      Client_Name: 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
    {
      Installation_id: '02',
      Client_Name : 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
{
      Installation_id: '03',
      Client_Name: 'Naeem Arshad',
      Client_Location : 'Abu Dhabi',
    }

  ];



}
