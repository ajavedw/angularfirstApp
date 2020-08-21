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
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
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

  ngOnInit(): void {}
}
