/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-paid-bills',
  templateUrl: './paid-bills.page.html',
  styleUrls: ['./paid-bills.page.scss'],
})
export class PaidBillsPage implements OnInit {
  constructor(private router:Router,  public activatedRoute: ActivatedRoute, private platform: Platform) { }
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
      this.router.navigateByUrl('home');
    });
  }
  bill_data = [
    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020'
    },
    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
      bill_type: 'Parts',
    },
    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
    },
  ]
  home() {
    this.router.navigateByUrl('home');
  }
  async unpaid() {
    const refresh= true;
    this.router.navigateByUrl('unpaid-bill/ '+ refresh );
  }
  async paid() {
    this.router.navigateByUrl('paid-bills');
  }
  billdetails(id) {
    this.router.navigateByUrl('/billdetails/' + id);
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
