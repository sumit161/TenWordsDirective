import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule
  ]
})
export class MaterialModule { }
