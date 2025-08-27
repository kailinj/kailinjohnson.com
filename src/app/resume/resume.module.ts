import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

import { HistoryModule } from "./../history/history.module";
import { PipesModule } from "./../pipes/pipes.module";
import { SkillsModule } from "./../skills/skills.module";
import { ResumeComponent } from "./resume.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    HistoryModule,
    ResumeComponent,
    SkillsModule,
    PipesModule,
  ],
  exports: [],
  providers: [],
})
export class ResumeModule {
  constructor() {}
}
