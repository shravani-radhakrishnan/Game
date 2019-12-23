import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.page.html',
  styleUrls: ['./guess.page.scss'],
})
export class GuessPage implements OnInit {
  otp;
  fieldLength = 4;
  config = {
    allowNumbersOnly: false,
    length: this.fieldLength,
    // isPasswordInput: false,
    // disableAutoFocus: false,
    // inputStyles: {
    //   'width': '50px',
    //   'height': '50px'
    // }
  };
  constructor(private apiService: AppComponent) {
    this.apiService.levels.subscribe(data => {
      console.log(data)
      if (data !== null && data !== undefined) {

        this.fieldLength = data.fields;
        console.log(this.fieldLength)
        // config['length'] = this.fieldLength
      }
    })
  }



  ngOnInit() {
  }

  onOtpChange(otp) {
    this.otp = otp;
  }
}
