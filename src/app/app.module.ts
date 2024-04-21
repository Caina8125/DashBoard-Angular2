import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

// imports: [
//    ...
//    GoogleChartsModule
// ],

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot({ mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
