/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-malfunction',
  templateUrl: './update-malfunction.page.html',
  styleUrls: ['./update-malfunction.page.scss'],
})
export class UpdateMalfunctionPage implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl('malfunctiondetails');

  }
  map() {
    this.router.navigateByUrl('map');
  }


}
