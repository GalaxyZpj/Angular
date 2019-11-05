import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  stop() {
    clearInterval(this.interval);
  }
  num: number = 0;
  @Output() sendNum = new EventEmitter<number>();  
  

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.interval = setInterval(() => {
      this.sendNum.emit(this.num + 1);
      this.num++;
    }, 1000);
  }




}
