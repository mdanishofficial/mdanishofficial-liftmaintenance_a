/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-installationdetails',
  templateUrl: './installationdetails.page.html',
  styleUrls: ['./installationdetails.page.scss'],
})
export class InstallationdetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigateByUrl('home');
  }
  installation_details = [
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
