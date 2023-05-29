import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsDashbordComponent } from './students-dashbord/students-dashbord.component';
import { FormComponent } from './students-dashbord/form/form.component';
import { TableComponent } from './students-dashbord/table/table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    StudentsDashbordComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[StudentsDashbordComponent]
})
export class StudentsModule { }
