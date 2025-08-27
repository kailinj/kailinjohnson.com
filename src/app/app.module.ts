import { A11yModule } from "@angular/cdk/a11y";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { PipesModule } from "./pipes/pipes.module";
import { ResumeModule } from "./resume/resume.module";
import { ScreenService } from "./services/screen.service";
import { SignatureComponent } from "./signature/signature.component";

@NgModule({
  imports: [
    AppComponent,
    HomeModule,
    SignatureComponent,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    A11yModule,
    BrowserModule,
    PipesModule,
    ResumeModule,
  ],
  exports: [],
  providers: [ScreenService],
})
export class AppModule {
  constructor() {
    // bootstrapApplication(AppComponent, { providers: [AppRoutingModule] });
  }
}
