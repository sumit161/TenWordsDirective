import { Injectable, OnInit } from '@angular/core';
import { Istudent } from '../model/interface';
import { Students } from '../const/array';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _snackbarService: SnackbarService) {}
  StudentsArray: Array<Istudent> = Students;
  newarr: Array<Istudent> = [];
  newobj!: Istudent;
  ngOnInit(): void {}
  getAllStudents(): Array<Istudent> {
    return this.StudentsArray;
  }
  getAddStudents(obj: Istudent): void {
    this.StudentsArray.push(obj);
    this._snackbarService.onOpenSnackBar(`${obj.fname} is added successfully`);
  }
  EmptyControl(msg: HTMLInputElement) {
    this._snackbarService.onOpenSnackBar(`Please write in input control`);
  }
  PuahInNewArr(para: Istudent): Array<Istudent> {
    this.newarr.push(para);
    return this.newarr.slice(this.newarr.length - 1);

    // this.newobj = para;
    // console.log(this.newobj)
    // return this.newobj
    // this.newarr[this.newarr.length - 1];
  }
/*   getnewObj(): Istudent {
    this.newobj;
    console.log(this.newobj);

    return this.newobj;
  } */
  obj:Array<Istudent>=[]
  getnewArr() {
return this.newarr

/*     this.obj= this.newarr.splice(0, this.newarr.length - 1);
    return this.obj; */
  }

  indexnumber!: number;
  GetRemoveObject(id: string, fname: string) {
    let index = this.StudentsArray.findIndex((ele) => {
      return ele.id === id;
    });
    this.indexnumber = index;
    let removedObj = this.StudentsArray.splice(index, 1);
    this._snackbarService.onOpenSnackBar(`${fname} is removed successfully`);
  }
  GetSearchIndex(id: string) {
    this.indexnumber = this.StudentsArray.findIndex((ele) => ele.id === id);
    // this.indexnumber = index;
  }
  updatedata(obj: Istudent, index: number) {
    this.StudentsArray.splice(index, 1, obj);
  }
}
