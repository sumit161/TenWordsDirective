import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/model/interface';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentsService } from 'src/app/services/students.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  isboolean: boolean = false;
  p: Array<Istudent> = this._studentsService.getnewArr();
// k: Istudent = this._studentsService.getnewObj()
  constructor(
    private _studentsService: StudentsService,
    private _snackbarService: SnackbarService,
    private _utilityService: UtilityService
  ) {}

  Onpatch(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    contact: HTMLInputElement,
    email: HTMLInputElement
  ) {
    if (
      (this.p[this.p.length - 1].fname.length &&
        this.p[this.p.length - 1].lname.length &&
        this.p[this.p.length - 1].contact.length &&
        this.p[this.p.length - 1].email.length) > 0
    ) {
      // this.p = this.p.slice(this.p.length - 1);
      this.isboolean = !this.isboolean;
      fname.value = this.p[this.p.length - 1].fname;
      lname.value = this.p[this.p.length - 1].lname;
      contact.value = this.p[this.p.length - 1].contact;
      email.value = this.p[this.p.length - 1].email;
      /*       fname.value = this.p[0].fname;
      lname.value = this.p[0].lname;
      contact.value = this.p[0].contact;
      email.value = this.p[0].email; */
      // this.p = this._studentsService.EmptyArr();
    }
  }
  ngOnInit(): void {
    // console.log(this._studentsService.getnewArr());
  }
  OnAddStudent(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    contact: HTMLInputElement,
    email: HTMLInputElement
  ) {
    if (
      (fname.value.length &&
        lname.value.length &&
        contact.value.length &&
        email.value.length) > 0
    ) {
      // this.isboolean = !this.isboolean;
      let obj: Istudent = {
        fname: fname.value,
        lname: lname.value,
        contact: contact.value,
        email: email.value,
        id: this._utilityService.uuid(),
      };
      fname.value = '';
      lname.value = '';
      contact.value = '';
      email.value = '';
      this._studentsService.getAddStudents(obj);
    } else if (
      (fname.value.length &&
        lname.value.length &&
        contact.value.length &&
        email.value.length) === 0
    ) {
      this._studentsService.EmptyControl(fname && lname && contact && email);
    }
  }

  update(
    fname: HTMLInputElement,
    lname: HTMLInputElement,
    contact: HTMLInputElement,
    email: HTMLInputElement
  ) {
    if (
      (fname.value.length &&
        lname.value.length &&
        contact.value.length &&
        email.value.length) > 0
    ) {
      this.isboolean = !this.isboolean;
      // this.p = this._studentsService.getnewArr();
      let obj1: Istudent = {
        fname: fname.value,
        lname: lname.value,
        contact: contact.value,
        email: email.value,
        id: this.p[this.p.length - 1].id,
      };
      fname.value = '';
      lname.value = '';
      contact.value = '';
      email.value = '';
      // this.p = [];
      this._studentsService.updatedata(obj1,this._studentsService.indexnumber);
    } else {
      this._studentsService.EmptyControl(fname && lname && contact && email);
    }
  }
}
