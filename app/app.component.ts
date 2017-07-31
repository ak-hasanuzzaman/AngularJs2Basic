import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
  <h1>{{pageHeader}}</h1>
  <my-app1></my-app1>
  </div>`,
})
export class AppComponent {
  pageHeader:string ='User details'
}