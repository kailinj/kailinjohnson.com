import { Component, OnInit, ViewChild } from "@angular/core";
import { MatAccordion, MatExpansionModule } from "@angular/material/expansion";

import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { PipesModule } from "app/pipes/pipes.module";
import { ScreenService } from "app/services/screen.service";
import { mySkills } from "./skills.constants";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    PipesModule,
  ],
})
export class SkillsComponent implements OnInit {
  @ViewChild("skillAccordion", { static: true }) skillAccordion!: MatAccordion;

  public minViewActive = false;
  public skillCategories: Set<string> = new Set(
    mySkills.map((s) => s.category)
  );
  public skills: any[] = Array.from(this.skillCategories).map((c) => ({
    section: c,
    isExpanded: true,
    items: mySkills.filter((s) => s.category === c),
  }));

  get allCollapsed() {
    return !this.expandedStatuses.has(true);
  }

  get allExpanded() {
    return !this.expandedStatuses.has(false);
  }

  get expandedStatuses() {
    return new Set([...this.skills].map((s) => s.isExpanded));
  }

  get screenIsXsOrSm() {
    return this.media.isXsOrSm;
  }

  constructor(public media: ScreenService) {}

  ngOnInit() {
    this.skills.forEach((s) => (s.isExpanded = true));
  }

  public toggleAccordion() {
    if (this.allCollapsed) {
      this.skillAccordion.openAll();
    } else {
      this.skillAccordion.closeAll();
    }
  }

  public toggleView() {
    this.minViewActive = !this.minViewActive;
  }
}
