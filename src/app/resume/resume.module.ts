import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { PipesModule } from './../pipes/pipes.module';
import { HistoryModule } from './../history/history.module';
import { SkillsModule } from './../skills/skills.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    NgScrollbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    HistoryModule,
    SkillsModule,
    PipesModule
  ],
  exports: [],
  providers: []
})
export class ResumeModule {
  constructor() {}
}
