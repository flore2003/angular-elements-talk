import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'awesome-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnChanges {
  
  /**
   * The name of the thing or person that is awesome
   */
  @Input()
  name: string;

  /**
   * Event fired when the awesome button is clicked
   */
  @Output()
  awesomeClick: EventEmitter<void> = new EventEmitter();

  /**
   * The number of times the awesome button was clicked
   */
  clickCount = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      this.clickCount = 0;
    }
  }

  /**
   * Called when the awesome button is clicked
   * @param e The event
   */
  onAwesomeButtonClicked(e: Event) {
    this.clickCount++;
    this.awesomeClick.next();
  }

}
