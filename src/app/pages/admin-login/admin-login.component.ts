import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectModalAdminComponent } from 'src/app/components/connect-modal-admin/connect-modal-admin.component';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  modaleConnectAdmin() {
    this.dialog.open(ConnectModalAdminComponent, {
      height: '500px',
      width: '450px',
    });
  }
}
