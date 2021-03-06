import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectModalComponent } from 'src/app/components/connect-modal/connect-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  modaleConnect() {
    this.dialog.open(ConnectModalComponent, {
      height: '500px',
      width: '450px',
    });
  }
}
