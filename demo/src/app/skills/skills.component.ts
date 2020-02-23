import { state, style, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { skills } from './skills.constants';

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [
    trigger(`activeViewToggled`, [
      state(`detailed`, style({ width: "100%", "margin-top": "0" })),
      state(`minimal`, style({ width: "40px", "margin-top": "-5px" }))
    ])
  ]
})
export class SkillsComponent implements OnInit {
  @ViewChild("skillAccordion", { static: true }) skillAccordion: MatAccordion;

  public minViewActive: boolean = false;
  public skills: any[] = skills;

  get allCollapsed() {
    return !this.expandedStatuses.has(true);
  }

  get allExpanded() {
    return !this.expandedStatuses.has(false);
  }

  get expandedStatuses() {
    return new Set([...this.skills].map(s => s.isExpanded));
  }

  constructor() {}

  ngOnInit() {
    this.skills.forEach(s => (s.isExpanded = true));
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
