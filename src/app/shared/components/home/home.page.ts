import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public router: Router,
    private route: ActivatedRoute) {}

  startGame(){
    // this.route.navigate(['/levels']);
  }

}
