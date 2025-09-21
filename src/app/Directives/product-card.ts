import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCard {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.border = '1px solid #e0e0e0';
    this.element.nativeElement.style.borderRadius = '10px';
    this.element.nativeElement.style.padding = '10px';
    this.element.nativeElement.style.transition = 'all 0.3s ease-in-out';
    this.element.nativeElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.12)';
    this.element.nativeElement.style.background = '#fff';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.border = '2px solid #3f51b5';
    this.element.nativeElement.style.boxShadow =
      '0 6px 16px rgba(63,81,181,0.25), 0 8px 24px rgba(63,81,181,0.18)';
    this.element.nativeElement.style.transform = 'scale(1.02)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.border = '1px solid #e0e0e0';
    this.element.nativeElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.12)';
    this.element.nativeElement.style.transform = 'scale(1)';
  }
}
