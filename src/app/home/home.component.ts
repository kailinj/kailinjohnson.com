import { trigger, transition, query, style, animate, stagger, sequence, group } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

import { slideDownFadeIn, animationEasing } from 'app/app-animations';
import { ScreenService } from 'app/services/screen.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("pageAnimations", [
      transition(":enter", [
        query(".hello-im div, svg, .description, .buttons", [
          style(slideDownFadeIn.out),
          stagger(150, [
            animate(
              slideDownFadeIn.easing,
              style(slideDownFadeIn.in)
            )])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding("@pageAnimations")

  public text = {
    hello: Array.from(`Hello!`),
    im: Array.from(`I'm`)
  };

  constructor(public screen: ScreenService) { }

  ngOnInit() { }
}
