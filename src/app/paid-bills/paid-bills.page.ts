/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paid-bills',
  templateUrl: './paid-bills.page.html',
  styleUrls: ['./paid-bills.page.scss'],
})
export class PaidBillsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
      bill_date: 'Sunday,23-03-2020'
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
    this.router.navigateByUrl('unpaid-bill');
  }
  async paid() {
    this.router.navigateByUrl('paid-bills');
  }
  billdetails(id) {
    this.router.navigateByUrl('/billdetails/' + id);
  }


}
