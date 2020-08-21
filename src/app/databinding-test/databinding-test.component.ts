import { Component } from '@angular/core';

@Component({
  selector: 'databindingtest',
  templateUrl: './databinding-test.component.html',
})
export class databindingTest {

twowayupdate:string = 'lalalalal';

twowaycheck = false;

/* if(twowayupdate:string !== ''){
  twowaycheck = true;
} */
}
