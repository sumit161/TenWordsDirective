import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditcard]',
})
export class CreditcardDirective {
  constructor(private eleref: ElementRef, private renederer: Renderer2) {}

  @HostListener('keyup') callback() {
    let inputcontrol = this.eleref.nativeElement.value.replace(/ /g, ''); //17
    // console.log(inputcontrol.length);
    if (inputcontrol.length > 16) {
      inputcontrol = inputcontrol.slice(0, 16); //16
    }
    let emptyArr = [];
    for (let i = 0; i < inputcontrol.length; i += 4) {
      emptyArr.push(inputcontrol.slice(i, i + 4));
      // console.log(emptyArr);
    }
    let newarray = emptyArr.map((ele) => +ele);
    // console.log(newarray);
    // [0000,0981.9089,8989.9099]
    if (newarray.every((ele) => ele >= 0)) {
      this.eleref.nativeElement.value = newarray.join(' ');
      console.log(this.eleref.nativeElement.value);
    } else {
      alert('sd');
      // this.eleref.nativeElement.value =
      //   this.eleref.nativeElement.value.length.slice(
      //     0,
      //     this.eleref.nativeElement.value.length - 1
      //   );
    }
    // console.log(inputcontrol.length);
  }
}
