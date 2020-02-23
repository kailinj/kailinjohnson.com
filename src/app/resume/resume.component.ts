import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { contactMethods, education, experience, overview } from './resume.constants';

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
  @ViewChild("sidenav", { static: true }) sidenav: MatSidenav;

  get screenIsXsOrSm() {
    return this.media.isActive("xs") || this.media.isActive("sm");
  }

  get sidenavOpen() {
    return !this.screenIsXsOrSm && this.showSidenav;
  }

  public contactMethods: any[] = contactMethods;
  public education: any[] = education;
  public experience: any[] = experience;
  public overview: string = overview;
  public showToolbar: boolean = false;
  public showSidenav: boolean = false;

  constructor(private router: Router, public media: MediaObserver) {}

  ngOnInit() {
    setTimeout(() => {
      this.showToolbar = true;
      this.showSidenav = true;
      // if (!this.media.isActive("xs")) {
      //   this.sidenav.open();
      // }
    }, 1000);
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
