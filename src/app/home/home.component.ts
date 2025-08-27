import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ScreenService } from "app/services/screen.service";

@Component({
  selector: "app-home",
  imports: [RouterModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [ScreenService],
})
export class HomeComponent implements OnInit {
  public text = {
    hello: Array.from("Hello!"),
    im: Array.from("I'm"),
  };

  constructor(public screen: ScreenService) {}

  ngOnInit() {}
}
