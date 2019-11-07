import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') appDropdown(eventData: Event) {
    this.isOpen = !this.isOpen;
    //  this.renderer.addClass(this.elRef.nativeElement, 'open');     MyTry
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    
  }
}
