import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
