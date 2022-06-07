/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-completemalfunction',
  templateUrl: './completemalfunction.page.html',
  styleUrls: ['./completemalfunction.page.scss'],
})
export class CompletemalfunctionPage implements OnInit {

  constructor(private router:Router , public activatedRoute: ActivatedRoute, private platform: Platform ) { }

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
      this.router.navigateByUrl('../newmalfunction');
    });
  }

malfunction_data=[
{
client_name:'Shadab Khan',
assigned_time:'Sunday, 23-03-2020',
status: 'New',
type:'Unidentified',
level:'Danger',
},
  {
    client_name: 'Akbar Khan',
    assigned_time: 'Sunday, 23-03-2020',
    status: 'New',
    type: 'Unidentified',
    level: 'Danger',
  },

]




  home() {
    this.router.navigateByUrl('home');
  }
  new() {
    this.router.navigateByUrl('newmalfunction');
}
  completed() {
    this.router.navigateByUrl('completemalfunction');
  }
  malfunctionsDetails(id) {
    this.router.navigateByUrl('malfunctiondetails/'+id );
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

}
