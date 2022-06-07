import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { FAQPageRoutingModule } from './faq-routing.module';

import { FAQPage } from './faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FAQPageRoutingModule,
    NgbModule
  ],
  declarations: [FAQPage]
})
export class FAQPageModule {}
