import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { PipesModule } from './../pipes/pipes.module';
import { HistoryComponent } from './history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, PipesModule],
  exports: [HistoryComponent],
  providers: []
})
export class HistoryModule {
  constructor() {}
}
