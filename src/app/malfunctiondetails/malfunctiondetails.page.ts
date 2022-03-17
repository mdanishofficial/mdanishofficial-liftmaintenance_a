/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { MapPage } from '../map/map.page'; 


@Component({
  selector: 'app-malfunctiondetails',
  templateUrl: './malfunctiondetails.page.html',
  styleUrls: ['./malfunctiondetails.page.scss'],
})
export class MalfunctiondetailsPage implements OnInit {

  constructor(private router: Router, public modalController:
     ModalController, public activatedRoute: ActivatedRoute, private platform: Platform) { }

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
      this.router.navigateByUrl('../completemalfunction');
    });
  }


  malfunctionupdate(){
this.router.navigateByUrl('update-malfunction');
  }

  back() {
    this.router.navigateByUrl('completemalfunction');

  }


  async map() {

    console.log('map popup');
    const modal = await this.modalController.create({
      component: MapPage,
      cssClass: 'map'
    });
    return await modal.present();
  }

}
