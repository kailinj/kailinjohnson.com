import "./polyfills";

// import { enableProdMode } from '@angular/core';

import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "app/app.component";
import { routes } from "app/app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideZonelessChangeDetection()],
};

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then((ref) => {
//     // Ensure Angular destroys itself on hot reloads.
//     if ((window as any)['ngRef']) {
//       (window as any)['ngRef'].destroy();
//     }
//     (window as any)['ngRef'] = ref;

//     // Otherwise, log the boot error
//   })
//   .catch((err) => console.error(err));
