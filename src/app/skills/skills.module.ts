import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";

import { PipesModule } from "./../pipes/pipes.module";
import { SkillsComponent } from "./skills.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    PipesModule,
    SkillsComponent,
  ],
  exports: [SkillsComponent],
})
export class SkillsModule {
  constructor() {}
}
