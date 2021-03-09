import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  colors: Array<string> = [
    'red',
    'yellow',
    'purple',
    'pink',
    'green',
    'blue',
    'seagreen',
  ];

  @HostListener('click') onMouseClick() {
    let index = Math.floor(Math.random() * this.colors.length);
    // this.el.nativeElement.style.backgroundColor = this.colors[index];
    this.changeColor(this.colors[index]);
  }

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    this.changeColor('yellow');
  }

  changeColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() set appHighlight(color: string) {
    this.changeColor(color);
  }
}
