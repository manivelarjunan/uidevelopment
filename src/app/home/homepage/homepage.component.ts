import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  LOGO = require("./images/profile.jpg");

  htmlImage = require("./images/htmlImage.jpg");

  angularImage = require("./images/angularImage.png");
  cssImage = require("./images/cssImage.png");
  d3Image = require("./images/d3Image.jpg");
  jsImage = require("./images/jsImage.png");

  nodeImage = require("./images/nodeImage.png");

  es6Image = require("./images/es6Image.png");

  typeImage = require("./images/typeImage.jpg");

  constructor() { }

  ngOnInit() {
  }

}
