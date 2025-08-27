import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ImageUrlPipe } from "./image-url.pipe";
import { SnakeCasePipe } from "./snake-case.pipe";
@NgModule({
  imports: [CommonModule, ImageUrlPipe, SnakeCasePipe],
  exports: [ImageUrlPipe, SnakeCasePipe],
  providers: [],
})
export class PipesModule {}
