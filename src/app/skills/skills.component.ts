import { state, style, trigger } from "@angular/animations";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MediaObserver } from "@angular/flex-layout";
import { MatAccordion } from "@angular/material/expansion";

import { mySkills } from "./skills.constants";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [
    trigger(`activeViewToggled`, [
      state(`detailed`, style({ width: "100%", "margin-top": "0" })),
      state(`detailed-sm`, style({ width: "auto", "margin-top": "0" })),
      state(`minimal`, style({ width: "40px", "margin-top": "-5px" })),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  @ViewChild("skillAccordion", { static: true }) skillAccordion: MatAccordion;

  public minViewActive: boolean = false;
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
    return this.media.isActive("xs") || this.media.isActive("sm");
  }

  constructor(public media: MediaObserver) {}

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
