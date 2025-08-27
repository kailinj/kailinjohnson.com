import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from "./resume/resume.component";

export const routes: Routes = [
  {
    path: "resume",
    component: ResumeComponent,
    data: {
      animationState: "Two",
      name: "resume",
    },
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      animationState: "One",
      name: "home",
    },
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },
];
