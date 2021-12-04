import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Optional, Host, SkipSelf, Renderer2 } from '@angular/core';
import { KeyboardService } from '../services/keyboard.service'


@Directive({
  selector: '[key-sel]',
})
export class KeyboardClickDirective {
  constructor(private keyService: KeyboardService, public element: ElementRef, private render: Renderer2) {
    this.render.setAttribute(this.element.nativeElement, "tabindex", "0")
  }


  @HostListener('keydown', ['$event']) onKeyUp(e: { keyCode: any; }) {

    switch (e.keyCode) {
      case 38:
        this.keyService.sendMessage({ element: this.element, action: 'UP' })
        break;
      case 37:
        this.keyService.sendMessage({ element: this.element, action: 'LEFT' })
        break;
      case 40:
        this.keyService.sendMessage({ element: this.element, action: 'DOWN' })
        break;
      case 39:
        this.keyService.sendMessage({ element: this.element, action: 'RIGTH' })
        break;
    }
  }
}