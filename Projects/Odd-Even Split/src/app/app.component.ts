import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  
  numRecieved(n: number) {
    console.log(n);
    if(n%2 === 0) {
      this.evenNumbers.push(n);
    } else {
      this.oddNumbers.push(n);
    }
  }
  
}
