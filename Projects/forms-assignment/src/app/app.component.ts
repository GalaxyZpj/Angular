import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.noTest.bind(this)], this.asyncNoTest),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    })
  }

  noTest(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test') {
      return {'testNotAllowed': true};
    }
    return null;
  }
  onSaveProject() {
    console.log(this.projectForm);
  }

  asyncNoTest(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test2') {
          resolve({'testNotAllowed': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
