import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigateByUrl('home');
  }
  home(){
    this.router.navigateByUrl('home');
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
