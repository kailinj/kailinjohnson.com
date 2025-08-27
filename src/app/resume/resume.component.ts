import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { Router, RouterModule } from "@angular/router";

import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HistoryModule } from "app/history/history.module";
import { PipesModule } from "app/pipes/pipes.module";
import { ScreenService } from "app/services/screen.service";
import { SkillsModule } from "app/skills/skills.module";
import { education, experience, overview } from "./resume.constants";

@Component({
  selector: "app-resume",
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    HistoryModule,
    SkillsModule,
    PipesModule,
  ],
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  public animatePage = true;
  @ViewChild("sidenav", { static: true }) sidenav!: MatSidenav;

  get screenIsXsOrSm() {
    return this.media.isXsOrSm;
  }

  get sidenavOpen() {
    return !this.screenIsXsOrSm && this.showSidenav;
  }

  public education: any[] = education;
  public experience: any[] = experience;
  public overview: string = overview;
  public showSidenav = false;
  public showToolbar = false;

  constructor(private router: Router, public media: ScreenService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showToolbar = true;
      this.showSidenav = true;
      // if (!this.media.isActive("xs")) {
      //   this.sidenav.open();
      // }
    }, 2500);
  }

  goBack() {
    this.showToolbar = false;
    this.showSidenav = false;
    // this.sidenav.close();
    setTimeout(() => {
      this.router.navigate(["home"]);
    }, 500);
  }
}
