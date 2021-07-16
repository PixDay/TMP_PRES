import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-modal',
  templateUrl: './connect-modal.component.html',
  styleUrls: ['./connect-modal.component.css']
})

export class ConnectModalComponent implements OnInit {
  firstname: string = '';
  name: string = '';
  mail: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}