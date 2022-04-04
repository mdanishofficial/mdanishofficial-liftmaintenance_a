import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newmalfunction',
  templateUrl: './newmalfunction.page.html',
  styleUrls: ['./newmalfunction.page.scss'],
})
export class NewmalfunctionPage implements OnInit {

  constructor( private router: Router,) { }

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

}
