import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html'
})
export class PowerComponent implements OnInit {
  power: number;

  ngOnInit(): void {
    this.power = 10;
  }
}
