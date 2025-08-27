import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";

@Injectable()
export class ScreenService {
  get isLg() {
    return this.media.isMatched("(min-width: 960px) and (max-width: 1279px)");
  }
  get isMd() {
    return this.media.isMatched("(min-width: 770px) and (max-width: 959px)");
  }
  get isSm() {
    return this.media.isMatched("(min-width: 600px) and (max-width: 769px)");
  }
  get isXl() {
    return this.media.isMatched("(min-width: 1280px)");
  }
  get isXs() {
    return this.media.isMatched("(max-width: 599px)");
  }
  get isXsOrSm() {
    return this.isXs || this.isSm;
  }

  constructor(public media: BreakpointObserver) {}
}
