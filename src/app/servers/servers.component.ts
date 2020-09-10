import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  EventOutput = '';
  Inputvalue = '';
  Inputvalue2 = 'value2';
  serverNameIs = 'serverName';
  showServerName = false;
  serverNaming = false;
  newBtnDisabled = true;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    setTimeout(() => {
      this.newBtnDisabled = false;
    }, 4000);
  }

  EventOutputFn() {
    this.EventOutput = "There's been an event" + this.Inputvalue2;
  }
  inputval(e) {
    this.Inputvalue = e.target.value;
  }

  inputval2(e) {
    this.Inputvalue2 = e.target.value;
  }

  dataBindExample() {
    this.showServerName = true;
  }

  newBtnClicked(){
    this.serverNaming = true;
  }

  ngOnInit(): void {}
}

/* Two typos of directives

1.  Structural e.g ngIF ngFor ngSwitch
2.  Component  (click)
3.  Attribute e.g ngStyle
*/
