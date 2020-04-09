import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-indicator-details',
  templateUrl: './indicator-details.component.html',
  styleUrls: ['./indicator-details.component.scss']
})
export class IndicatorDetailsComponent implements OnInit {
  details: any;
  jsonData: any;
  constructor() { }

  ngOnInit(): void {

    this.details = sessionStorage.getItem("dataAll");
    this.jsonData = JSON.parse(this.details);

  }

}
