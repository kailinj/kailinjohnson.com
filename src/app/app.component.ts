import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { RouterModule, RouterOutlet } from "@angular/router";

import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [AsyncPipe, RouterModule],
  styleUrls: ["./app.component.scss"],
  providers: [MatIconRegistry],
})
export class AppComponent {
  public config$: any;
  public title = "Kailin Johnson";

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animationState"]
    );
  }
}
