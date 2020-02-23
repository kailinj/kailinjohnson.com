import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { contactMethods, education, experience, overview } from './resume.constants';

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  animations: [
    trigger("pageAnimations", [
      transition(":enter", [
        query(".mat-toolbar", [
          style({ opacity: 0, transform: "translateY(-65px)" }),
          animate(
            "500ms cubic-bezier(0.35, 0, 0.25, 1)",
            style({ opacity: 1, transform: "none" })
          )
        ]),
        query(".mat-sidenav-container", [
          style({ opacity: 0, transform: "translateY(-65px)" }),
          animate(
            "500ms cubic-bezier(0.35, 0, 0.25, 1)",
            style({ opacity: 1, transform: "none" })
          )
        ])
      ]),
      transition(":leave", [
        query(".mat-toolbar", [
          style({ opacity: 1, transform: "none" }),
          animate(
            "500ms cubic-bezier(0.35, 0, 0.25, 1)",
            style({ opacity: 0, transform: "translateY(-65px)" })
          )
        ]),
        query(".mat-sidenav-container", [
          style({ opacity: 1, transform: "none" }),
          animate(
            "500ms cubic-bezier(0.35, 0, 0.25, 1)",
            style({ opacity: 0, transform: "translateY(-65px)" })
          )
        ])
      ])
    ])
  ]
})
export class ResumeComponent implements OnInit {
  @HostBinding("@pageAnimations")
  public animatePage = true;
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
