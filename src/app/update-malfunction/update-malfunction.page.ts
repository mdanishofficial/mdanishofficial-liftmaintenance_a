/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-update-malfunction',
  templateUrl: './update-malfunction.page.html',
  styleUrls: ['./update-malfunction.page.scss'],
})
export class UpdateMalfunctionPage implements OnInit {

  constructor(private router:Router, public activatedRoute: ActivatedRoute, private platform: Platform) { }

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
  // eslint-disable-next-line @typescript-eslint/member-ordering
  refresh
  call_api() {
    var refresh = true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('../malfunctiondetails');
    });
  }

  back(){
    this.router.navigateByUrl('malfunctiondetails');

  }
  map() {
    this.router.navigateByUrl('map');
  }


}
