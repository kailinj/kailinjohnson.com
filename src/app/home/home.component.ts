import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../services/screen.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(public screen: ScreenService) {}

  ngOnInit() {}
}
