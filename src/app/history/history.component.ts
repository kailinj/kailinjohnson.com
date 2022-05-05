import { Component, Input, OnInit } from '@angular/core';

import { ScreenService } from 'app/services/screen.service';

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  @Input() history: any[];
  @Input() title: string;

  constructor(public screen: ScreenService) { }

  ngOnInit() { }

  goTo(url: string) {
    window.open(url, "_blank");
  }

  hasSections(details: any[]) {
    return details && details.length && !((typeof details[0] === 'string') || (details[0] instanceof String));
  }
}
