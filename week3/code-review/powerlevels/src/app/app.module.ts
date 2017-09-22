import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/powers/human.component';
import { SaiyanComponent } from './power/powers/saiyan.component';
import { SuperSaiyanComponent } from './power/powers/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './power/powers/super-saiyan-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
