import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  constructor() {}
  stringINt:string = 'strInterpolation';
  stringId:number = 10;
  stringM = 'String Method';

  stringMeth(){
    return this.stringM;
  }
}
