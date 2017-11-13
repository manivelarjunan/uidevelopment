import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'Angular', component: AngularPageComponentComponent, children: [
      { path: 'DataBinding', component: DataBindingComponent },
      { path: 'StringInterpolation', component: StringInterpolationComponent },
      { path: 'TwowayDataBinding', component: TwoWayDataBindingComponent },
      { path: 'PropertyBinding', component: PropertyBindingComponent },
      { path: 'EventBinding', component: EventBindingComponent }
    ]
  },
  { path: 'Javascript', component: JavascriptPageComponentComponent },
  { path: 'Css', component: CssPageComponentComponent },
  { path: 'D3', component: D3PageComponentComponent },

  
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


