/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.page.html',
  styleUrls: ['./billdetails.page.scss'],
})
export class BilldetailsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private router: Router, public modalController: ModalController,) { }


  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
  }
  id
  sub
  bill_data = [
    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
      bill_receipt_status:'Waiting',
      bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',
    },

    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
      bill_receipt_status: 'Waiting',
       bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',
    },
    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_receipt_status: 'Waiting',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
      bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',

    },
  ]
  back() {
    this.router.navigateByUrl('unpaid-bill');

  }

  async presentModalUpdatePayment() {
    console.log('presentModalUpdatePayment popup');
    const modal =await this.modalController.create({
component: PaymentModalPage,
cssClass:'payment-modal'
    });
    return await modal.present();
  }






}
