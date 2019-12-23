import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {
  levelOptions = ['Easy', 'Medium', 'Hard'];
  constructor(private router: Router,private apiService:AppComponent) { }

  ngOnInit() {
  }

  startGame(option) {
    let num:number;
    let obj = {
        level:option,
        fields:num
    }
    if(option === 'Easy'){
      num = 4;
      obj.fields = num;
      this.apiService.levels.next(obj)
    }else if(option === 'Medium'){
      num = 5;
      obj.fields = num;
      this.apiService.levels.next(obj)
    }else {
      num = 7;
      obj.fields = num;
      this.apiService.levels.next(obj)
    }
    this.router.navigate(['/guess']);
  }
}
