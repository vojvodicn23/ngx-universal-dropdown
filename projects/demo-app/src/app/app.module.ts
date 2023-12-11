import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxUniversalDropdownModule } from 'ngx-universal-dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUniversalDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
