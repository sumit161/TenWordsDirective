import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/model/interface';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  array: Array<Istudent> = this._studentsService.getAllStudents();
  dataSource = this.array;
  isboolean:boolean=false
  constructor(public _studentsService: StudentsService,private _snackbarService:SnackbarService) {}
  ngOnInit(): void {}
  OnEdit(obj: Istudent) {
    // this._studentsService.EmptyArr()
    this._studentsService.PuahInNewArr(obj);
    this._studentsService.GetSearchIndex(obj.id);
    this._snackbarService.onOpenSnackBar("Please press patch button for update information")

  }
  OnDelete(id: string, name: string) {
    this._studentsService.GetRemoveObject(id, name);
  }
}
