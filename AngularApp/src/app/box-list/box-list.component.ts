import { Component, Input } from '@angular/core';
import { Box } from '../box.interface';


@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent {
  @Input() boxes: Box[] = [];
  defaultBox: Box = {
    size: 5,
    contents: 'Default box contents',
    shippingLabelCode: 'ABC123',
    recipient: 'Nihar',
    weight: 1000
  };

  constructor() {
    this.boxes.push(this.defaultBox);
  }

  addBox(size: number, contents: string, shippingLabelCode: string, weight: number, recipient?: string) {
    const box: Box = { size, contents, shippingLabelCode, recipient, weight };
    this.boxes.push(box);
  }
}
