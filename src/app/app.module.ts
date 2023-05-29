import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './students/students.module';
import { CreditcardDirective } from './directive/creditcard.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { TenWordDirective } from './ten-word.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditcardDirective,
    TenWordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
