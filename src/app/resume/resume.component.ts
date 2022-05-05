import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { slideDownFadeIn } from 'app/app-animations';
import { education, experience, overview } from './resume.constants';

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  animations: [
    trigger("pageAnimations", [
      transition(":enter", [
        query(".mat-toolbar", [
          style(slideDownFadeIn.out),
          animate(
            `500ms ${slideDownFadeIn.easing}`,
            style(slideDownFadeIn.in)
          )
        ]),
        query(".mat-sidenav-container", [
          style(slideDownFadeIn.out),
          animate(
            slideDownFadeIn.easing,
            style(slideDownFadeIn.in)
          )
        ])
      ]),
      transition(":leave", [
        query(".mat-toolbar, .mat-sidenav-container", [
          style(slideDownFadeIn.in),
          animate(
            slideDownFadeIn.easing,
            style(slideDownFadeIn.out)
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

  public education: any[] = education;
  public experience: any[] = experience;
  public overview: string = overview;
  public showSidenav: boolean = false;
  public showToolbar: boolean = false;

  constructor(private router: Router, public media: MediaObserver) { }

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
