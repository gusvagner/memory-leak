import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Leaked0Component } from './leaked/leaked-0.component';
import { Leaked1Component } from './leaked/leaked-1.component';
import { Leaked2Component } from './leaked/leaked-2.component';
import { Leaked3Component } from './leaked/leaked-3.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Leaked0Component,
    Leaked1Component,
    Leaked2Component,
    Leaked3Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
