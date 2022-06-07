import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {
  public isCollapsed: boolean[] = [];
  constructor(private service: MainService, private router: Router) {
    this.call_api();
   }


  ngOnInit() {
  }
  call_api() {
    this.service.getfaqs().subscribe(res => {
      this.faqs_data = res
      console.log(res)
      for (var i = 0; i < this.faqs_data.length; i++) {
        this.isCollapsed[i] = true
      }
    })
  }

  faqs_data = []
  
  home() {
    this.router.navigateByUrl('home');
  }
  profile() {
    this.router.navigateByUrl('profile');

  }
  settings() {
    this.router.navigateByUrl('settings');
  }
  language() {
    this.router.navigateByUrl('languages');
  }
  async faq() {
    this.router.navigateByUrl('faq');
  }
  notifications() {
    this.router.navigateByUrl('notifications');
  }
}
