import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgxUniversalDropdownDirective } from './ngx-universal-dropdown.directive';

@Component({
  selector: 'ngx-universal-dropdown',
  templateUrl: './ngx-universal-dropdown.component.html',
  styleUrls: ['./ngx-universal-dropdown.component.css']
})
export class NgxUniversalDropdownComponent implements OnChanges, AfterViewInit {

  @ViewChild(NgxUniversalDropdownDirective, { static: false }) dropdownDirective!: NgxUniversalDropdownDirective;
  @ViewChild('dropdown') dropdown!: ElementRef;

  @Output() onSingleSelectEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMultiSelectEvent: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() icon = '';
  @Input() disabled = false;
  @Input() onHover = false;
  @Input() multiSelect = false;
  @Input() options:any[] = [];
  @Input() values:any[] = [];

  selected = false;
  iconUrl = '';
  isOpen = false;

  data!:{option: any, value:any, selected:boolean}[];


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['options']){
      this.options = changes['options'].currentValue;
      this.updateData();
    }
    if(changes['values']){
      this.values = changes['values'].currentValue;
      this.updateData();
    }
    if(changes['icon']){
      this.icon = changes['icon'].currentValue;
    }
    if(changes['disabled']){
      this.disabled = changes['disabled'].currentValue;
    }
    if(changes['onHover']){
      this.onHover = changes['onHover'].currentValue;
    }
    if(changes['multiSelect']){
      this.multiSelect = changes['multiSelect'].currentValue;
    }

    this.updateState();
  }

  ngAfterViewInit(): void {
    const element = this.dropdown.nativeElement;

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'style') {
          const newStyle = window.getComputedStyle(element).display;
          if(newStyle === 'block'){
            this.isOpen = true;
          }
          else{
            this.isOpen = false;
          }
          this.updateState();
        }
      });
    });

    observer.observe(element, { attributes: true });
  }

  updateData(){
    this.data = this.options.map((option, index) => {

      return{
        option,
        value: this.values[index],
        selected : false,
      };
    });
    this.updateState();
  }

  updateState(){
    
    this.iconUrl = `url(${this.icon})`;
  }

  onSelect(index:number){
    if(this.multiSelect){
      if(this.onHover){
        this.data[index].selected = !this.data[index].selected;
        this.onMultiSelectEvent.emit(this.multiSelected);
      }
      else{
        this.data[index].selected = !this.data[index].selected;
        this.onMultiSelectEvent.emit(this.multiSelected);
        this.dropdownDirective.closeDropdown();
      }
    }
    else{
      if(this.onHover){
        if(this.data[index].selected){
          this.updateData();
          this.onSingleSelectEvent.emit(null);
          this.dropdownDirective.closeDropdown();
        }
        else{
          this.updateData();
          this.onSingleSelectEvent.emit(this.data[index].value);
          this.data[index].selected = true;
          this.dropdownDirective.closeDropdown();
        }
      }
      else{
        if(this.data[index].selected){
          this.updateData();
          this.onSingleSelectEvent.emit(null);
        }
        else{
          this.updateData();
          this.onSingleSelectEvent.emit(this.data[index].value);
          this.data[index].selected = true;
        }
      }
    }
    this.updateState();
  }

  get multiSelected(){
    return this.data.filter(item => item.selected).map(item => {
      return item.value;
    });
  }

  get isSelected(){
    if(this.data.find(item => item.selected === true)){
      return true;
    }
    else{
      return false;
    }
  }

  
}
