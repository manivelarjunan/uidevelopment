import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularPageComponentComponent } from './angularpage/angular-page-component/angular-page-component.component';
import { JavascriptPageComponentComponent } from './javascriptpage/javascript-page-component/javascript-page-component.component';
import { CssPageComponentComponent } from './csspage/css-page-component/css-page-component.component';
import { D3PageComponentComponent } from './d3page/d3-page-component/d3-page-component.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { DataBindingComponent } from './angularpage/angular-page-component/data-binding/data-binding.component';
import { HtmlComponentComponent } from './htmlpage/html-component/html-component.component';
import { DocTypepageComponent } from './htmlpage/html-Component/doc-typepage/doc-typepage.component';
import { CreateAngularAppComponent } from './angularpage/angular-page-component/create-angular-app/create-angular-app.component';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'Angular', component: AngularPageComponentComponent, children: [
      { path: 'CreateAngular', component: CreateAngularAppComponent},
      { path: 'DataBinding', component: DataBindingComponent }
    ]
  },
  {
    path: 'html', component: HtmlComponentComponent,
    children: [
      { path: 'doctype', component: DocTypepageComponent }
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


