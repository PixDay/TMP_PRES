import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAdminModalComponent } from 'src/app/components/add-admin-modal/add-admin-modal.component';
import { EditAdminModalComponent } from 'src/app/components/edit-admin-modal/edit-admin-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  modaleAddAdmin() {
    this.dialog.open(AddAdminModalComponent, {
      height: '600px',
      width: '450px',
    });
  }

  modaleEditAdmin() {
    this.dialog.open(EditAdminModalComponent, {
      height: '600px',
      width: '450px',
    });
  }
}
