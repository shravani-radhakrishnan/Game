import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuessPage } from './guess.page';
import { NgOtpInputModule } from 'ng-otp-input';
import { RouterModule } from '@angular/router';

this

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgOtpInputModule,
    RouterModule.forChild([
      {
        path:'',
        component:GuessPage
      }
    ])
  ],
  declarations: [GuessPage]
})
export class GuessPageModule {}
