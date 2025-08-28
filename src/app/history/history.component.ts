import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { PipesModule } from "app/pipes/pipes.module";

import { ScreenService } from "app/services/screen.service";

@Component({
  selector: "app-history",
  imports: [CommonModule, MatCardModule, MatChipsModule, PipesModule],
  templateUrl: "./history.component.html",
})
export class HistoryComponent implements OnInit {
  @Input() history: any[] = [];
  @Input() title = "";

  constructor(public screen: ScreenService) {}

  ngOnInit() {}

  goTo(url: string) {
    window.open(url, "_blank");
  }

  hasSections(details: any[]) {
    return (
      details &&
      details.length &&
      !(typeof details[0] === "string" || details[0] instanceof String)
    );
  }
}
