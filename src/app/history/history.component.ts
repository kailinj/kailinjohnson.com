import { Component, Input, OnInit } from '@angular/core';
import { isString } from 'util';

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  @Input() history: any[];
  @Input() title: string;

  constructor() {}

  ngOnInit() {}

  goTo(url: string) {
    window.open(url, "_blank");
  }

  hasSections(details: any[]) {
    return details && details.length && !isString(details[0]);
  }
}
