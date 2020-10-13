import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports:      [ BrowserModule, FormsModule ,BrowserAnimationsModule,MatSliderModule,MatBadgeModule,MatButtonModule,MatDividerModule,MatIconModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
