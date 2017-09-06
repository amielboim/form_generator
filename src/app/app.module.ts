import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormComponent }  from './form.comopnent';
import { inputComponent }  from './form_elements/input.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent , FormComponent,inputComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
