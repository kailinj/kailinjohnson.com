import { Component } from '@angular/core';

@Component({
  selector: "app-signature",
  templateUrl: "./signature.component.html",
  styleUrls: ["./signature.component.scss"],
})
export class SignatureComponent {
  constructor() { }

  ngOnInit() {
    this.calcPaths(4);
  }

  private calcPaths(totalDur) {
    // unset 'animated' class to body which will reset the animation
    const signatureEl = window.document.getElementById('kailin-signature')
    
    if (signatureEl) {
      signatureEl.classList.add('animated')
    
      // get all SVG elements - lines and dots
      const paths = document.querySelectorAll('.autograph_path')
    
      // prepare path length variable
      let len = 0
    
      // prepare animation delay length variable
      let delay = 0

      // prepare animation delay length variable
      let initialDelay = 2.5
    
      // escape if no elements found
      if (!paths.length) {
        return false
      }
    
      // set duration in seconds of animation to default if not set
      const totalDuration = totalDur || 7
    
      // calculate the full path length
      paths.forEach((path: SVGPathElement) => {
        const totalLen: number = path.getTotalLength()
        len += totalLen
      })
    
      paths.forEach((path: SVGPathElement, key: number) => {
        const pathElem = path
    
        // get current path length
        const totalLen = path.getTotalLength()
    
        // calculate current animation duration
        const duration = totalLen / len * totalDuration
    
        // set animation duration and delay
        pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
        pathElem.style.animationDelay = `${key === 0 ? delay + initialDelay : delay}s`
    
        // set dash array and offset to path length - this is how you hide the line
        pathElem.setAttribute('stroke-dasharray', String(totalLen))
        pathElem.setAttribute('stroke-dashoffset', String(totalLen))
    
        // set delay for the next path - added .2 seconds to make it more realistic
        delay += duration + 0.085 + (key === 0 ? initialDelay : 0)
      })
    
      // set 'animated' class to body which will start the animation
      window.document.getElementById('kailin-signature').classList.add('animated')
      return true
    }
  }
}
