import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  items = [
    { "name": "Fast and accurate for your development", "icon": "fas fa-space-shuttle" },
    { "name": "Secure and reliable as you expect", "icon": "fas fa-shield-alt" },
    { "name": "Many tools and great features", "icon": "fas fa-tools" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
