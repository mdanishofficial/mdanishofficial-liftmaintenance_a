/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MapPage } from '../map/map.page'; 


@Component({
  selector: 'app-malfunctiondetails',
  templateUrl: './malfunctiondetails.page.html',
  styleUrls: ['./malfunctiondetails.page.scss'],
})
export class MalfunctiondetailsPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController,) { }

  ngOnInit() {
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
