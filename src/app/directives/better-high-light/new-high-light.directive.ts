import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appNewHighLight]'
})
export class NewHighLightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highLightColor = '#d9d9ff';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', '#d9d9ff');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color', '#d9d9ff');
  }
}
