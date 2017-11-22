import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-angular-app',
  templateUrl: './create-angular-app.component.html',
  styleUrls: ['./create-angular-app.component.css']
})
export class CreateAngularAppComponent implements OnInit {

  nodeInstallImage = require("./images/nodeInstall.png");

  constructor() { }

  ngOnInit() {
  }

}
