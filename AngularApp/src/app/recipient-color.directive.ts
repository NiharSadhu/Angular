import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[recipientColor]'
})
export class RecipientColorDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click') onClick() {
    const recipientElement: HTMLElement = this.elementRef.nativeElement;
    const recipientText: string = recipientElement.innerText;

    if (!recipientText || recipientText.trim() === 'Your Name') {
      recipientElement.style.color = 'red';
    }
  }
}
