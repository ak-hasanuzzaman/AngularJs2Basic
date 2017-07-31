import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './Component/user.component';

@NgModule({
  declarations: [AppComponent,UserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}