import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './powers.component.html'
})

export class HumanComponent {
  @Input()
  power = 0;

  className: string = this.constructor.name;
}
