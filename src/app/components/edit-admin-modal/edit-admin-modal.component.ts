import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-admin-modal',
  templateUrl: './edit-admin-modal.component.html',
  styleUrls: ['./edit-admin-modal.component.css']
})
export class EditAdminModalComponent implements OnInit {
  firstname: string = 'David';
  name: string = 'Coutisson';
  mail: string = 'david.coutissonàgmail.com';
  password: string = 'something';

  constructor() { }

  ngOnInit(): void {
  }

  save()
  {
    console.log("SAVE")
  }
}
