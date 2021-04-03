import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[ngpEnterSection]',
})
export class NgpEnterSectionDirective implements AfterViewInit, OnDestroy {
  elRef: HTMLElement;
  _observer: IntersectionObserver;
  text = '';
  @Input() dirX;
  @Input() dirY;
  @Input() time = '1s';

  constructor(private _elRef: ElementRef) {
    this.elRef = this._elRef.nativeElement;
  }

  async ngAfterViewInit() {
    this.elRef.style.opacity = '0';
    this.setInitialAnimation();

    const options = {
      threshold: 0.2,
    };
    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elRef.style.transition = `all ${this.time} ease`;
          this.elRef.style.opacity = '1';
          this.elRef.style.transform = 'translate(0%,0%)';
          observer.unobserve(entry.target);
        }
      });
    }, options);
    this._observer.observe(this.elRef);
  }

  ngOnDestroy(): void {
    this._observer.unobserve(this.elRef);
  }

  setInitialAnimation() {
    // console.log(this.dirX, this.dirY);
    let translateX = '0%';
    let translateY = '0%';
    if (this.dirX == 'left') {
      translateX = '-50%';
    } else if (this.dirX == 'right') {
      translateX = '50%';
    }

    if (this.dirY == 'top') {
      translateY = '-50%';
    } else if (this.dirY == 'bottom') {
      translateY = '50%';
    }
    this.elRef.style.transform = `translate(${translateX},${translateY})`;
  }
}
