import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appShColor]'
})
export class ShColorDirective {


    constructor(private elementRef: ElementRef, private rendered: Renderer2) {
    }

    @HostListener('mouseover')
    onMouseOver() {
        this.rendered.setStyle(this.elementRef.nativeElement, 'color', 'red');
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.rendered.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }

}
