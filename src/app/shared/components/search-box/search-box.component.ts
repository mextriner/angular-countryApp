import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent {
  @Input()
  public placeholder: string='';

  @Output()
  onValue:EventEmitter<string> = new EventEmitter();

  emitValue( term : string):void{
    this.onValue.emit(term);
  }

}
