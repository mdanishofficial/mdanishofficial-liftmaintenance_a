import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { MapPage } from '../map/map.page';
import * as $ from 'jquery';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

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

  model

  sub
  refresh
  call_api() {
    var refresh = true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('../totalinstallation');
    });
  }
  id
  malfunction_details = [
    {
      client_date: 'sunday,23-03-2022',
      client_name: 'Shadab Khan',
      lift_no: '4',
      city: 'Dubai',
      address: 'World Trade Center Building',
      assigned_time: 'Sunday, 23-03-2020',
      location: 'Latitude: 33° 43 17.33" N Longitude: 33° 43 17.33" N ',
      lift_stops: '6',
      building_type: 'residential',
      Engine_type: 'Chines',
      Door_type: 'Automatic',
     installtion_level:'Start',
     installtion_level_detail:''
    },
    {
      client_date: 'sunday,23-03-2022',
      client_name: 'Shadab Khan',
      lift_no: '4',
      city: 'Dubai',
      address: 'World Trade Center Building',
      assigned_time: 'Sunday, 23-03-2020',
      location: 'Latitude: 33° 43 17.33" N Longitude: 33° 43 17.33" N ',
      lift_stops: '6',
      building_type: 'residential',
      Engine_type: 'Chines',
      Door_type: 'Automatic',
     installtion_level:'Start',
     installtion_level_detail:''
    },
    {
      client_date: 'sunday,23-03-2022',
      client_name: 'Shadab Khan',
      lift_no: '4',
      city: 'Dubai',
      address: 'World Trade Center Building',
      assigned_time: 'Sunday, 23-03-2020',
      location: 'Latitude: 33° 43 17.33" N Longitude: 33° 43 17.33" N ',
      lift_stops: '6',
      building_type: 'residential',
      Engine_type: 'Chines',
      Door_type: 'Automatic',
     installtion_level:'Start',
     installtion_level_detail:''
    },

  ]
  

  malfunctionupdate() {
    this.router.navigateByUrl('update-malfunction');
  }

  back() {
    this.router.navigateByUrl('totalinstallation');

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
