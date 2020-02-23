import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Injectable()
export class ScreenService {
  get isLg() {
    return this.media.isActive("lg");
  }
  get isMd() {
    return this.media.isActive("md");
  }
  get isSm() {
    return this.media.isActive("sm");
  }
  get isXl() {
    return this.media.isActive("xl");
  }
  get isXs() {
    return this.media.isActive("xs");
  }
  get isXsOrSm() {
    return this.isXs || this.isSm;
  }

  constructor(public media: MediaObserver) {}
}
