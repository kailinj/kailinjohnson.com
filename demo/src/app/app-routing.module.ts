import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: "resume",
    component: ResumeComponent,
    data: {
      animationState: "Two",
      name: "resume"
    }
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      animationState: "One",
      name: "home"
    }
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
