/* eslint-disable no-var */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-todayinstallation',
  templateUrl: './todayinstallation.page.html',
  styleUrls: ['./todayinstallation.page.scss'],
})
export class TodayinstallationPage implements OnInit {

  constructor(private router: Router, public activatedRoute: ActivatedRoute, private platform: Platform) { }
  ngOnInit() {
    console.log('Inside Ng On INit')
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.refresh = params['refresh'];
      console.log(this.refresh)
      if (this.refresh == 'true') {
        console.log('Refresh is True')
        this.call_api()
      }
    });
  }
  sub
  refresh
  call_api() {
    var refresh = true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('../home');
    });
  }



  back() {
    this.router.navigateByUrl('home');
  }
  today_installation = [
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

