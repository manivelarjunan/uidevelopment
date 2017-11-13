import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularPageComponentComponent } from './angularpage/angular-page-component/angular-page-component.component';
import { JavascriptPageComponentComponent } from './javascriptpage/javascript-page-component/javascript-page-component.component';
import { CssPageComponentComponent } from './csspage/css-page-component/css-page-component.component';
import { D3PageComponentComponent } from './d3page/d3-page-component/d3-page-component.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { StringInterpolationComponent } from './angularpage/angular-page-component/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './angularpage/angular-page-component/property-binding/property-binding.component';
import { TwoWayDataBindingComponent } from './angularpage/angular-page-component/two-way-data-binding/two-way-data-binding.component';
import { EventBindingComponent } from './angularpage/angular-page-component/event-binding/event-binding.component';
import { DataBindingComponent } from './angularpage/angular-page-component/data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularPageComponentComponent,
    JavascriptPageComponentComponent,
    CssPageComponentComponent,
    D3PageComponentComponent,
    HomepageComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent,
    EventBindingComponent,
    DataBindingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

