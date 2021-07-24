import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-modal-admin',
  templateUrl: './connect-modal-admin.component.html',
  styleUrls: ['./connect-modal-admin.component.css']
})
export class ConnectModalAdminComponent implements OnInit {
  firstname: string = '';
  name: string = '';
  mail: string = '';
  password: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
