import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-admin-modal',
  templateUrl: './add-admin-modal.component.html',
  styleUrls: ['./add-admin-modal.component.css']
})
export class AddAdminModalComponent implements OnInit {
  firstname: string = '';
  name: string = '';
  mail: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  create()
  {
    
  }

}
