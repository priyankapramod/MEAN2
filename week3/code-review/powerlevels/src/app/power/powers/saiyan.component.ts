import { Component, OnChanges } from '@angular/core';

import { HumanComponent } from './human.component';

@Component({
  selector: 'app-saiyan',
  templateUrl: './powers.component.html'
})

export class SaiyanComponent extends HumanComponent implements OnChanges {
  ngOnChanges(changes): void {
    this.power *= 10;
  }
}
