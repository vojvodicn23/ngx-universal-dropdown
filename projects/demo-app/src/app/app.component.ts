import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  
  onMultiSelectEvent(event:any){
    console.log('Multi select:', event);
  }
  onSingleSelectEvent(event:any){
    console.log('Single select:', event);
  }
}
