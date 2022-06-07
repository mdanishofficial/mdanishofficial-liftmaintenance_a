/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-newmalfunction',
  templateUrl: './newmalfunction.page.html',
  styleUrls: ['./newmalfunction.page.scss'],
})
export class NewmalfunctionPage implements OnInit {

  constructor( private router: Router, public activatedRoute: ActivatedRoute, private platform: Platform) { }

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

  new_mulfunction = [
    {
      client_name: 'Akbar Khan',
      assigned_time: 'Sunday, 23-03-2020',
      status: 'New',
      type: 'Unidentified',
      level: 'Danger',
      
    },
    {
      client_name: 'Mustafa Khan',
      assigned_time: 'Sunday, 23-03-2020',
      status: 'New',
      type: 'Unidentified',
      level: 'Normal',
      
    }
  ]


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

  home() {
    this.router.navigateByUrl('home');
  }
  new() {
    this.router.navigateByUrl('newmalfunction');
  }
  completed() {
    this.router.navigateByUrl('completemalfunction');
  }

}
