import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatGridListModule,
],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
  ]
})
export class MaterialAppModule { }
