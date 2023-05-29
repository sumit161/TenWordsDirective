import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var rnd = (Math.random() * 16) | 0,
          v = c === 'x' ? rnd : (rnd & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
