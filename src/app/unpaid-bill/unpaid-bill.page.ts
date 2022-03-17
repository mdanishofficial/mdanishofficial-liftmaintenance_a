/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-unpaid-bill',
  templateUrl: './unpaid-bill.page.html',
  styleUrls: ['./unpaid-bill.page.scss'],
})
export class UnpaidBillPage implements OnInit {

  constructor(private platform: Platform, private router:
     Router , public activatedRoute: ActivatedRoute){ 
    this.call_api()
  }

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
    bill_id:'TD24153',
    bill_amount:'350 Riyals',
    bill_type:'Parts',
    bill_status:'unpaid',
    bill_date: 'Sunday,23-03-2020'
  },
    {
      bill_id: 'TD24152',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020'
    },
    {
      bill_id: 'TD24151',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020'
    },
]
  async unpaid() {
    this.router.navigateByUrl('unpaid-bill');
  }
   paid() {
    this.router.navigateByUrl('paid-bills');
  }
  billdetails(id) {
    console.log(id)
    this.router.navigateByUrl('/billdetails/'+id);
  }
  home() {
    this.router.navigateByUrl('home');
  }


}
