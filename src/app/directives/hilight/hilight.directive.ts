import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})

export class BasicHighLightDirective implements OnInit {
  constructor(private element: ElementRef) {

  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#71e071';
    this.element.nativeElement.style.borderColor = '#fff';
  }
}
