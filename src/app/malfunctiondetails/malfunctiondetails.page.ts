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
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
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
  id
  malfunction_details = [
    {
      client_name: 'Shadab Khan',
      lift_no: '4',
      city: 'Dubai',
      address: 'World Trade Center Building',
      assigned_time: 'Sunday, 23-03-2020',
      location: 'Latitude: 33° 43 17.33" N Longitude: 33° 43 17.33" N ',
      lift_stops: '6',
      status: 'New',
      type: 'Unidentified',
      level: 'Danger',
    },
  ]
  malfunctionupdate() {
    this.router.navigateByUrl('update-malfunction');
  }
  back() {
    this.router.navigateByUrl('completemalfunction');
  }
  notifications() {
    this.router.navigateByUrl('notifications');
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
