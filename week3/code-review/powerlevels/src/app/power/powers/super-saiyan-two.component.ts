import { Component, OnChanges } from '@angular/core';

import { HumanComponent } from './human.component';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './powers.component.html'
})

export class SuperSaiyanTwoComponent extends HumanComponent implements OnChanges {
  ngOnChanges(changes): void {
    this.power *= 150;
  }
}
