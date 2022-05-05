import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ScreenService } from 'app/services/screen.service';

import { PipesModule } from './../pipes/pipes.module';
import { HistoryComponent } from './history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, PipesModule],
  exports: [HistoryComponent],
  providers: [ScreenService]
})
export class HistoryModule {
  constructor() { }
}
