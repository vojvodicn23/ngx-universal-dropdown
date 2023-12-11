import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngxDropdownSelect]'
})
export class NgxUniversalDropdownDirective {
  @Input() onHover: boolean = false;
  @Input() multiSelect: boolean = false;

  private isOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.onHover) {
      this.openDropdown();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.onHover) {
      this.closeDropdown();
    }
  }

  @HostListener('click') onClick() {
    if (!this.onHover) {
      if(this.isOpen){
        this.closeDropdown();
      }
      else{
        this.openDropdown();
      }
    }
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: Event) {
    if(!this.onHover){
      if (!this.el.nativeElement.contains(event.target)) {
        this.closeDropdown();
      }
    }
  }

  openDropdown() {
    const dropdown = this.el.nativeElement.querySelector('.dropdown-content');
    dropdown.style.display = 'block';
    this.isOpen = true;
  }
  closeDropdown() {
    const dropdown = this.el.nativeElement.querySelector('.dropdown-content');
    dropdown.style.display = 'none';
    this.isOpen = false;
  }
}