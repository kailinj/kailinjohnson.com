import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  public config$;
  public icons = [`back`, `collapse-all`, `expand-all`, `grow`, `shrink`];
  public title = "Kailin Johnson";

  constructor(
    app: FirebaseApp,
    fns: AngularFireFunctions,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    console.log(app);
    const callable = fns.httpsCallable("helloWorld");
    this.config$ = callable({ name: "some-data" });
    this.icons.forEach(i => {
      iconRegistry.addSvgIcon(
        i,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${i}.svg`)
      );
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animationState"]
    );
  }
}
