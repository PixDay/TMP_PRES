import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-article-modal',
  templateUrl: './edit-article-modal.component.html',
  styleUrls: ['./edit-article-modal.component.css']
})
export class EditArticleModalComponent implements OnInit {
  firstname: string = '';
  name: string = '';
  mail: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  edit()
  {
    
  }
}
