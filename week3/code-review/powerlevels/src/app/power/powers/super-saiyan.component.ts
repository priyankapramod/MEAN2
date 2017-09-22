import { Component, OnChanges } from '@angular/core';

import { HumanComponent } from './human.component';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './powers.component.html'
})

export class SuperSaiyanComponent extends HumanComponent implements OnChanges {
  ngOnChanges(changes): void {
    this.power *= 90;
  }
}
