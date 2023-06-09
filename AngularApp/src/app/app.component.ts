import { Component } from '@angular/core';
import { Box } from './box.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  boxes: Box[] = [];

  constructor() {
    this.boxes.push({
      size: 5,
      contents: 'Default box contents',
      shippingLabelCode: 'ABC123',
      recipient: 'Your Name',
      weight: 1000
    });
  }
}
