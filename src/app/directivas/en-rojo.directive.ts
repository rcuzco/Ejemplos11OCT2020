import { Directive, ElementRef, Renderer2, OnInit, Input, asNativeElements } from '@angular/core';

@Directive({
    selector: '[appEnRojo]'
})
export class EnRojoDirective implements OnInit
{
    @Input() colorTexto: string;
    renderer: Renderer2;
    elementRef: ElementRef;
    constructor(elementRef: ElementRef, renderer: Renderer2)
    {
        //elementRef.nativeElement.style.backgroundColor = 'red';
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
    }
    ngOnInit(): void
    {
        if (this.colorTexto)
        {
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.colorTexto);
        }
        else
        {
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
        }
    }

}
