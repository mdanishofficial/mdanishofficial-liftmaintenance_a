import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
declare let $ : any;
@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {
language='English';
collapse=false;
  constructor(private platform: Platform,private router: Router) {
    
  }
  ngOnInit() {
  }
  passvalue(value){
    $("#collapseTwo").collapse('hide');
    this.language=value
    console.log(this.language)
  }
  collapsetrue(){
    console.log('Inside Collapse True')
    this.collapse=false
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
  languages(){
    this.router.navigateByUrl('language');
  }
  faq(){
    this.router.navigateByUrl('faq');
  }
  notifications(){
    this.router.navigateByUrl('notifications');
  }


}
