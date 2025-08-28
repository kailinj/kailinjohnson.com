import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScreenService } from "app/services/screen.service";

import { MatButtonModule } from "@angular/material/button";
import { PipesModule } from "../pipes/pipes.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FlexLayoutModule, PipesModule, MatButtonModule],
  exports: [HomeComponent],
  providers: [ScreenService],
})
export class HomeModule {
  constructor() {}
}
