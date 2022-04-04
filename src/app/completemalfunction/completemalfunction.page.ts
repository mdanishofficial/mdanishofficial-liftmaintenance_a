/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-completemalfunction',
  templateUrl: './completemalfunction.page.html',
  styleUrls: ['./completemalfunction.page.scss'],
})
export class CompletemalfunctionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
  malfunctionsDetails() {
    this.router.navigateByUrl('malfunctiondetails');
  }



}
