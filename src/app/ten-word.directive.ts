import { Directive, HostListener } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';

@Directive({
  selector: '[appTenWord]'
})
export class TenWordDirective {

  constructor(private _SnackbarService:SnackbarService) { }
  @HostListener('input', ['$event']) OnKeyUp(event: Event) {

    let inputControl = (event.target as HTMLInputElement).value as string;
    let count = 0;
    for (let i = 0; i < inputControl.length; i++) {
      // console.log(inputControl);
      if (count === 10) {
        (event.target as HTMLInputElement).value = inputControl.slice(0,length-2);
        this._SnackbarService.onOpenSnackBar("Here you can write only ten words")
      } else if (inputControl[0] === ' ') {
        (event.target as HTMLInputElement).value = '';
        // console.log('starting character no space');
      } else if (inputControl.includes('  ')) {
        // count++
        inputControl = inputControl.replace(/  /, ' ');
        (event.target as HTMLInputElement).value = inputControl;
        console.log('count');
      } else if (inputControl[i] === ' ') {
        count++;
        // console.log(count);
      }
    }
  }
}
