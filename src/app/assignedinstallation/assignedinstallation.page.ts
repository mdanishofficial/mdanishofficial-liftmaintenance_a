/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assignedinstallation',
  templateUrl: './assignedinstallation.page.html',
  styleUrls: ['./assignedinstallation.page.scss'],
})
export class AssignedinstallationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigateByUrl('home');
  }
  assigned_task = [
    {
      Client: 'Javed Akhtar',
      Location: 'New city',
      Installation_Level: 'Level 2',
      Installation_Status: 'Progressing',
      Date_assigned: '24 - 11 - 2022',
    },

    {
      Client: 'Gul Ahmad',
      Location: 'New city',
      Installation_Level: 'Level 2',
      Installation_Status: 'Progressing',
      Date_assigned: '24 - 11 - 2022',
    },

    {
      Client: 'Atif Shezad',
      Location: 'New city',
      Installation_Level: 'Level 2',
      Installation_Status: 'Progressing',
      Date_assigned: '24 - 11 - 2022',
    }

  ];



}
