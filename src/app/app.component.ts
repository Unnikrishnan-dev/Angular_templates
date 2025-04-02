import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routes';
  profileInfo: FormGroup
  constructor(fb:FormBuilder) {
   this.profileInfo = fb.group({
    name:[''],
    email:[''],
    phno:[''],
    address:['']
   })
  }

  onSubmit(){
  console.log(this.profileInfo.value)
  }
}
