import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageUrlPipe } from './image-url.pipe';
import { SnakeCasePipe } from './snake-case.pipe';

const pipes = [
  ImageUrlPipe,
  SnakeCasePipe
]

@NgModule({
  declarations: pipes,
  imports: [CommonModule],
  exports: pipes,
  providers: [],
})
export class PipesModule { }